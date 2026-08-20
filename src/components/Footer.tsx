import React from 'react';
import { ArrowUp, Mail, Video, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="bg-[#0A0A0B] border-t border-neutral-800/80 py-12 text-neutral-400 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-800/80">
          {/* Logo & Tagline */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-white text-lg font-bold tracking-tighter">
                NEXTFRAME<span className="text-blue-500">.</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
                AI Studio
              </span>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm">
              Ad content for brands, delivered fast. AI-powered UGC & CGI video ads for Meta, TikTok, and YouTube Shorts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-neutral-400">
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
            <a
              href="mailto:hello@nextframe.studio"
              className="text-white hover:text-blue-400 font-bold transition-colors"
            >
              hello@nextframe.studio
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} Nextframe Content Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>UGC Avatars</span>
            <span>•</span>
            <span>3D CGI Simulations</span>
            <span>•</span>
            <span>Performance Hooks</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
