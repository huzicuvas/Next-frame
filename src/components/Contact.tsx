import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, Sparkles, Send, Clock, ShieldCheck, Zap, Layers } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'kiramorganai@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const pricingTiers = [
    {
      id: 'tier-15-30s',
      name: '15-30 Second Video',
      price: '$45',
      specs: '1 version • 15-30s runtime',
      subject: 'Inquiry for 15-30 Second Video',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a 15-30 second video ad for our brand ($45 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A",
    },
    {
      id: 'tier-30-60s',
      name: '30-60 Second Video',
      price: '$100',
      specs: '1 version • 30-60s runtime',
      subject: 'Inquiry for 30-60 Second Video',
      body: "Hi Hook Frames Studio Team,%0A%0AWe're looking for a 30-60 second video ad for our brand ($100 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AProduct Focus Areas: %0A",
    },
    {
      id: 'tier-60s',
      name: '60 Second Video',
      price: '$140',
      specs: '1 version • Full narrative',
      subject: 'Inquiry for 60 Second Video',
      body: "Hi Hook Frames Studio Team,%0A%0AWe're looking for a full 60-second in-depth narrative video ad ($140 / 1 version).%0A%0ABrand Name: %0AProduct / Service Link: %0ACore Message / Proof Points: %0A",
    },
    {
      id: 'tier-hook-pack',
      name: 'Hook Variation Pack',
      price: 'Get a Quote',
      specs: '3 videos • 15-30s each • 3 different hooks',
      subject: 'Inquiry for Hook Variation Pack',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to request a quote for a 3-video Hook Variation Pack (3 videos, 15-30s each, with 3 distinct opening hooks).%0A%0ABrand Name: %0AProduct Link: %0ATarget Ad Platform (Meta / TikTok): %0A",
    },
    {
      id: 'tier-custom',
      name: 'Custom Brand Package',
      price: 'Get a Quote',
      specs: 'Longer videos, multiple products, or monthly batches',
      subject: 'Inquiry for Custom Brand Package',
      body: "Hi Hook Frames Studio Team,%0A%0AWe're looking for custom brand production (longer videos, multiple products/SKUs, or ongoing monthly content).%0A%0ABrand Name: %0ANumber of SKUs / Monthly Volume: %0ATimeline & Goals: %0A",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-[#0A0A0B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 lg:p-14 text-center shadow-2xl relative overflow-hidden">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>DIRECT PRICING & CLIENT INQUIRIES</span>
          </div>

          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto"
          >
            Ready to scale your ad creatives?
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mt-4 font-normal leading-relaxed">
            Select a tier below to start immediately, or email us directly with your product link. We deliver high-performing video ads in 48 hours with full commercial rights.
          </p>

          {/* Primary Mailto Action & Copy Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={`mailto:${email}?subject=New%20Ad%20Creative%20Inquiry%20-%20Hook%20Frames%20Studio&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20creating%20performance%20ad%20content%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0AFormat%20Needed%20(15-30s%20/%2030-60s%20/%2060s%20/%20Hook%20Pack%20/%20Custom):%20%0ATarget%20Launch%20Date:%20%0A`}
              id="contact-mailto-btn"
              className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-blue-500 hover:text-white text-black text-sm font-bold transition-all duration-200 shadow-lg active:scale-95"
            >
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              <span>Email {email}</span>
            </a>

            {/* Quick 1-Click Email Copy */}
            <button
              type="button"
              id="copy-email-btn"
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-mono font-medium transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick-Tier Pricing Presets (Single Source of Pricing Info) */}
          <div className="mt-10 pt-8 border-t border-neutral-800 max-w-3xl mx-auto text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                Select a Tier for Instant Pre-filled Email:
              </span>
              <span className="text-[11px] font-mono text-blue-400 hidden sm:inline">
                5 Transparent Tiers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pricingTiers.map((tier) => (
                <a
                  key={tier.id}
                  id={`tier-button-${tier.id}`}
                  href={`mailto:${email}?subject=${encodeURIComponent(tier.subject)}&body=${tier.body}`}
                  className="group block p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800/90 border border-neutral-800 hover:border-blue-500/50 transition-all duration-200 hover:scale-[1.02] shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                      {tier.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[11px] font-bold font-mono text-blue-300 shrink-0">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-mono line-clamp-2">
                    {tier.specs}
                  </p>
                  <div className="mt-2.5 flex items-center gap-1 text-[10px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                    <span>Pre-fill email inquiry</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Guarantee Badges: Response time, Commercial rights, Delivery time */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>Replies within 2 hours</span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Full commercial rights included</span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <span>48h fast delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

