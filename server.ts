import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy initializer for GoogleGenAI
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in the environment.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// System instructions for Hook Frames Studio representative & FAQ modes
const SYSTEM_INSTRUCTIONS: Record<string, string> = {
  faq: `You are the official Studio Representative & Client Onboarding Assistant for Hook Frames Studio.
Your primary job is to clearly and transparently answer potential clients' questions about:
1. WHAT WE MAKE:
   - High-performing Synthetic UGC Video Ads with photorealistic AI avatar creators.
   - 3D CGI & Fluid Simulations (exploding views, luxury liquid splashes, macro textures, product motion).
   - Rapid Hook Variation Packs (3 videos with different opening hook angles to maximize ROAS on Meta & TikTok).
   - Formats: 9:16 vertical (Reels/TikTok/Shorts) and 1:1 square feeds, with dynamic captions and SFX.
2. HOW WE MAKE IT (Production Pipeline):
   - 100% crewless Generative AI + 3D CGI pipeline.
   - No physical camera crews, no actor scheduling delays, no creator ghosting.
   - No physical product shipping required for CGI/AI; digital photos & product links are all we need.
   - First video drafts delivered within 24 to 48 hours.
3. PRICING & COMMERCIAL TERMS (5 Transparent Tiers, lowest to highest):
   - 15-30 Second Video — $45 — 1 version
   - 30-60 Second Video — $100 — 1 version
   - 60 Second Video — $140 — 1 version
   - Hook Variation Pack — Get a Quote — 3 videos, 15-30 sec each, different hooks
   - Custom Brand Package — Get a Quote — longer videos, multiple products, or ongoing monthly content
   - 100% full commercial advertising rights included with every tier.
   - Zero long-term retainer lock-in.
   - Direct inquiry email: kiramorganai@gmail.com

Tone: Professional, direct, transparent, helpful, and concise. Use bold bullet points and clear numbers. Never hallucinate fake strategic consulting services—focus on our actual ad production services, turnaround, and pricing models.`,

  pricing: `You are Hook Frames Studio's Pricing & Package Advisor.
Help prospective brand owners and media buyers understand Hook Frames Studio's 5 transparent pricing tiers (ordered lowest to highest), deliverables, turnaround times, and commercial terms:
- Transparent Tiers:
  1. 15-30 Second Video — $45 — 1 version (15-30 sec runtime, 1 high-converting version, AI voiceover & audio design, 9:16/1:1 formats, 48h delivery).
  2. 30-60 Second Video — $100 — 1 version (30-60 sec runtime, 1 version, expanded product showcase with deep feature breakdown, 48h delivery).
  3. 60 Second Video — $140 — 1 version (Full 60-second in-depth narrative ad for complex products, SaaS, or detailed storytelling, 48h delivery).
  4. Hook Variation Pack — Get a Quote — 3 videos, 15-30 sec each, different hooks (3 distinct 3-second opening hooks for Meta/TikTok A/B testing, 48-72h delivery).
  5. Custom Brand Package — Get a Quote — longer videos, multiple products, or ongoing monthly content (Multi-SKU packages, monthly high-velocity batches, dedicated creative director, priority turnaround).
- Cost advantage: Traditional production costs $3,000–$15,000+ per shoot day with studio rentals and creator fees. Hook Frames Studio delivers at 80-90% lower cost with 48-hour turnarounds.
- Usage Rights: Full perpetual commercial advertising rights across Meta, TikTok, YouTube, and Google Ads included.
- How to order: Email kiramorganai@gmail.com with the product URL and desired tier.`,

  process: `You are Hook Frames Studio's Technical & Production Pipeline Lead.
Explain the step-by-step technical process of how Hook Frames Studio creates ads:
- Step 1 (Briefing): Send product link and website. No physical shipping is needed for CGI or synthetic UGC.
- Step 2 (Generation & Simulation): We generate photorealistic synthetic talent, dynamic voice synthesis, and 3D fluid/CGI simulations in 24-48h.
- Step 3 (Delivery & Scaling): Receive final 9:16 and 1:1 MP4 files with multiple hook variations, burnt-in captions, and clean naming taxonomy ready to import directly into Ads Manager.
Highlight speed (48 hours), quality (4K upscaled, photorealistic lighting), and zero production headaches. Contact email: kiramorganai@gmail.com`,
};

// API Route for multi-turn chat
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, mode = "faq", modelOverride } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "A valid 'messages' array is required." });
    }

    const ai = getGenAI();

    // Model selection based on requested mode or override
    let selectedModel = "gemini-3.7-flash";
    if (modelOverride) {
      selectedModel = modelOverride;
    } else if (mode === "pricing") {
      selectedModel = "gemini-3.1-pro-preview";
    } else if (mode === "process") {
      selectedModel = "gemini-3.1-flash-lite";
    } else {
      selectedModel = "gemini-3.7-flash";
    }

    const systemInstruction = SYSTEM_INSTRUCTIONS[mode] || SYSTEM_INSTRUCTIONS.faq;

    // Format chat history for GoogleGenAI generateContent
    const formattedContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" || m.role === "model" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "No response generated.";

    return res.json({
      reply: replyText,
      modelUsed: selectedModel,
      modeUsed: mode,
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate AI response. Please check your Gemini API key.",
    });
  }
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Hook Frames Studio server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
