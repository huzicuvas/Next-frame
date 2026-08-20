import React from 'react';
import { Play, Sparkles, ArrowRight, Zap, Shield, Flame, CheckCircle, Video, Clock } from 'lucide-react';

interface HeroProps {
  onExplorePortfolio: () => void;
  onSelectFeaturedVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio, onSelectFeaturedVideo }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Bento Main Hero Tile (Left 8 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            {/* Background Decorative SVG Wireframe */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none">
              <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>

            {/* Top Pill / Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-neutral-800 border border-neutral-700/60 rounded-full text-[11px] font-mono font-medium text-neutral-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                AI Content Production Studio
              </span>
              <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                // Zero Film Crews
              </span>
            </div>

            {/* Studio Headline */}
            <div className="space-y-4 my-auto py-2">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
              >
                Ad content for brands, <br />
                <span className="text-neutral-500">delivered fast.</span>
              </h1>

              <p
                id="hero-tagline-sub"
                className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed"
              >
                Nextframe produces high-converting <span className="text-white font-medium">UGC-style creator ads</span> and <span className="text-white font-medium">photorealistic CGI product videos</span> using generative AI pipelines.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="mailto:hello@nextframe.studio?subject=New%20Ad%20Campaign%20Inquiry%20-%20Nextframe&body=Hi%20Nextframe%20Team,%0A%0AWe're%20interested%20in%20creating%20performance%20ad%20content%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0AContent%20Type%20(UGC%20Creator%20/%20CGI%203D%20Product%20/%20Hook%20Pack):%20%0ATarget%20Launch%20Date:%20%0A"
                id="hero-cta-mailto"
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-black/40 text-sm active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="hero-cta-portfolio"
                onClick={onExplorePortfolio}
                className="px-6 py-4 rounded-full bg-neutral-800 hover:bg-neutral-700/80 text-neutral-300 hover:text-white border border-neutral-700/80 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4 text-blue-400" />
                <span>Explore Drops</span>
              </button>
            </div>

            {/* Proof Metrics Bento Strip */}
            <div className="grid grid-cols-3 gap-3 pt-8 mt-6 border-t border-neutral-800">
              <div className="p-3 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl">
                <span className="text-xl sm:text-2xl font-bold text-white font-mono block">48h</span>
                <span className="text-[11px] text-neutral-400 font-mono tracking-tight uppercase">Turnaround</span>
              </div>
              <div className="p-3 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl">
                <span className="text-xl sm:text-2xl font-bold text-blue-400 font-mono block">5+</span>
                <span className="text-[11px] text-neutral-400 font-mono tracking-tight uppercase">Hooks / Brief</span>
              </div>
              <div className="p-3 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl">
                <span className="text-xl sm:text-2xl font-bold text-white font-mono block">0</span>
                <span className="text-[11px] text-neutral-400 font-mono tracking-tight uppercase">Crew Overhead</span>
              </div>
            </div>
          </div>

          {/* Bento Featured Preview Tile (Right 5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-center px-1 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-semibold">Featured Ad Drop</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </div>
              <span className="text-[10px] bg-neutral-800 px-2.5 py-1 rounded-full text-neutral-400 font-mono font-medium uppercase tracking-wider">
                9:16 FEED
              </span>
            </div>

            {/* Simulated Vertical Ad Reel Frame */}
            <div
              onClick={onSelectFeaturedVideo}
              className="group relative my-4 aspect-[9/13] rounded-2xl overflow-hidden cursor-pointer bg-neutral-950 border border-neutral-800"
            >
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
                alt="Nextframe Ad Creative Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

              {/* Top Badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  Beauty
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500 text-white text-[10px] font-bold">
                  <Zap className="w-3 h-3 fill-white" />
                  46% Hook Rate
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 fill-white text-white ml-0.5" />
              </div>

              {/* Bottom Captions Simulation */}
              <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none space-y-1.5">
                <span className="inline-block px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-neutral-700 text-[10px] font-mono text-blue-300 font-semibold uppercase tracking-wider">
                  Hook #1 • Problem & Agitation
                </span>
                <p className="text-sm font-semibold text-white leading-snug drop-shadow-md">
                  Luxe Skin Serum UGC
                </p>
                <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-mono">
                  <span>⚡ 48h Turnaround</span>
                  <span>•</span>
                  <span>🎯 4.1% CTR</span>
                </div>
              </div>
            </div>

            {/* Action underneath */}
            <div className="flex items-center justify-between pt-2 px-1">
              <span className="text-xs text-neutral-500 font-mono">Click to preview active sample</span>
              <button
                type="button"
                onClick={onSelectFeaturedVideo}
                className="text-xs font-bold text-white hover:text-blue-400 flex items-center gap-1.5 transition-colors"
              >
                <span>Watch Sample</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
