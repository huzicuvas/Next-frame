import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, Sparkles, Send, Clock, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'kiramorganai@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const emailTemplates = [
    {
      label: '⚡ 15-30s Video ($45)',
      subject: 'Inquiry for 15-30 Second Video',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a 15-30 second video ad for our brand.%0A%0ABrand Name: %0AProduct URL: %0AAd Angle / Hook Idea: %0A",
    },
    {
      label: '🎬 30-60s Video ($100)',
      subject: 'Inquiry for 30-60 Second Video',
      body: "Hi Hook Frames Studio Team,%0A%0AWe're looking for a 30-60 second video ad for our brand.%0A%0ABrand Name: %0AProduct URL: %0A",
    },
    {
      label: '🎥 60s Video ($140)',
      subject: 'Inquiry for 60 Second Video',
      body: "Hi Hook Frames Studio Team,%0A%0AWe're looking for a full 60-second in-depth narrative video ad.%0A%0ABrand Name: %0AProduct Category: %0A",
    },
    {
      label: '🔥 Hook Variation Pack',
      subject: 'Inquiry for Hook Variation Pack',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to request a quote for a 3-video Hook Variation Pack (different opening hooks).%0A%0ABrand Name: %0AProduct URL: %0ATarget Platform (Meta/TikTok): %0A",
    },
    {
      label: '📦 Custom Brand Package',
      subject: 'Inquiry for Custom Brand Package',
      body: "Hi Hook Frames Studio Team,%0A%0AWe're looking for custom monthly volume or multi-SKU video ad production.%0A%0ABrand Name: %0AMonthly Volume / SKUs: %0A",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-[#0A0A0B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 lg:p-14 text-center shadow-xl relative overflow-hidden">
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>DIRECT CLIENT INQUIRIES</span>
          </div>

          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto"
          >
            Ready to scale your ad creatives?
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mt-4 font-normal leading-relaxed">
            Send us your product link and campaign goals. We'll outline winning hook concepts and deliver your first ad cut within 48 hours.
          </p>

          {/* Primary Mailto Action */}
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
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-mono font-medium transition-all"
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

          {/* Quick Inquiry Presets */}
          <div className="mt-10 pt-8 border-t border-neutral-800 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-3">
              One-click tier starter templates:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {emailTemplates.map((template, idx) => (
                <a
                  key={idx}
                  href={`mailto:${email}?subject=${encodeURIComponent(template.subject)}&body=${template.body}`}
                  className="px-3.5 py-2 rounded-full bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white font-medium transition-colors"
                >
                  {template.label}
                </a>
              ))}
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>Replies within 2 hours</span>
            </div>
            <span className="text-neutral-700">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Full commercial rights included</span>
            </div>
            <span className="text-neutral-700">•</span>
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
