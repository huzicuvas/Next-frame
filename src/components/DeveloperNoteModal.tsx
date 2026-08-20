import React, { useState } from 'react';
import { X, Code2, Github, Sparkles, Check, Copy, ExternalLink, Image, Video } from 'lucide-react';

interface DeveloperNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperNoteModal: React.FC<DeveloperNoteModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copySnippet = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const nextJsExportSnippet = `// 🚀 Deploying to Vercel / GitHub
// 1. Initialize git and commit:
git init
git add .
git commit -m "feat: Nextframe AI Content Studio Portfolio"

// 2. Push to GitHub:
git remote add origin https://github.com/YOUR_USER/nextframe-portfolio.git
git push -u origin main

// 3. Deploy to Vercel:
// Import the repo in vercel.com — it builds instantly with 'npm run build' (Vite/React/Next)!`;

  const swapVideoSnippet = `// 🎥 In src/data/portfolioData.ts:
{
  id: 'your-ad-id',
  title: 'Your Product Name',
  brand: 'Your Brand',
  category: 'Beauty', // 'Beauty' | 'Tech' | 'Food' | 'Family' | 'Testimonial' | 'CGI'
  thumbnailUrl: '/assets/your-thumbnail.jpg', // or an external image URL
  videoUrl: 'https://your-cdn.com/ad-creative.mp4', // or local video
  duration: '0:20',
  aspectRatio: '9:16',
  hookHeadline: '"Your opening hook statement here..."',
  description: 'Ad strategy description here...',
}`;

  return (
    <div
      id="dev-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="dev-guide-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6 text-neutral-300"
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              Developer Guide: Swapping Assets & GitHub/Vercel Deploy
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Section 1: Swapping Videos */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" /> 1. How to Swap Video Thumbnails & MP4s
            </span>
            <button
              type="button"
              onClick={() => copySnippet(swapVideoSnippet, 'video')}
              className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
            >
              {copiedCode === 'video' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCode === 'video' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-3.5 bg-neutral-950 rounded-2xl border border-neutral-800 text-[11px] font-mono text-neutral-300 overflow-x-auto">
            {swapVideoSnippet}
          </pre>
        </div>

        {/* Section 2: Vercel & GitHub Deploy */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" /> 2. GitHub & Vercel Push
            </span>
            <button
              type="button"
              onClick={() => copySnippet(nextJsExportSnippet, 'deploy')}
              className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
            >
              {copiedCode === 'deploy' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCode === 'deploy' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-3.5 bg-neutral-950 rounded-2xl border border-neutral-800 text-[11px] font-mono text-neutral-300 overflow-x-auto">
            {nextJsExportSnippet}
          </pre>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-blue-500 hover:text-white text-black text-xs font-bold transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
