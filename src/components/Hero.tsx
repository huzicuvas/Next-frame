import React from 'react';
import { Play, Sparkles, ArrowRight, Zap, Shield, Flame, CheckCircle, Video, Clock, Layers } from 'lucide-react';

interface HeroProps {
  onStartProject?: () => void;
  onExplorePortfolio?: () => void;
  onSelectFeaturedVideo: () => void;
  onGetQuote?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExplorePortfolio,
  onSelectFeaturedVideo,
  onGetQuote,
}) => {
  const handleStartProjectClick = () => {
    if (onStartProject) {
      onStartProject();
    } else if (onGetQuote) {
      onGetQuote();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Bento Main Hero Tile (Left 7 cols) */}
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
                Hook Frames Studio produces high-converting <span className="text-white font-medium">UGC-style creator ads</span> and <span className="text-white font-medium">photorealistic CGI product videos</span> using generative AI pipelines.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                id="hero-cta-start-project"
                onClick={handleStartProjectClick}
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-black/40 text-sm active:scale-95 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Proof Metrics Bento Strip */}
            <div className="grid grid-cols-3 gap-3 pt-8 mt-6 border-t border-neutral-800">
              <div className="p-3 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl">
                <span className="text-xl sm:text-2xl font-bold text-white font-mono block">48h</span>
                <span className="text-[11px] text-neutral-400 font-mono tracking-tight uppercase">Turnaround</span>
              </div>
              <div className="p-3 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl">
                <span className="text-xl sm:text-2xl font-bold text-blue-400 font-mono block">3–5+</span>
                <span className="text-[11px] text-neutral-400 font-mono tracking-tight uppercase">Hooks / Pack</span>
              </div>
              <div className="p-3 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl">
                <span className="text-xl sm:text-2xl font-bold text-white font-mono block">100%</span>
                <span className="text-[11px] text-neutral-400 font-mono tracking-tight uppercase">Commercial Rights</span>
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

            {/* Stylized Vertical Ad Reel Frame */}
            <div
              onClick={onSelectFeaturedVideo}
              className="group relative my-4 aspect-[9/13] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col justify-between p-4"
            >
              {/* Pattern Grid */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-25 transition-opacity" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-[10px] font-bold text-blue-300 uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Sample Style
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500 text-white text-[10px] font-bold">
                  <Zap className="w-3 h-3 fill-white" />
                  48% Hook Rate
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
                <div className="w-14 h-14 bg-neutral-950/90 backdrop-blur-md border border-neutral-700/80 rounded-2xl flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-500/60 shadow-2xl">
                  <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 mt-2.5 tracking-wider uppercase">
                  UGC / CGI Creative Frame
                </span>
              </div>

              {/* Bottom Captions Simulation */}
              <div className="relative z-10 text-left pointer-events-none space-y-1.5 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-neutral-800/80">
                <span className="inline-block px-2 py-0.5 rounded bg-black border border-neutral-700 text-[10px] font-mono text-blue-300 font-semibold uppercase tracking-wider">
                  Hook #1 • Problem & Agitation
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  Problem-Agitation UGC Ad Format
                </p>
                <div className="flex items-center gap-3 text-[10px] text-neutral-400 font-mono">
                  <span>⚡ 48h Turnaround</span>
                  <span>•</span>
                  <span>🎯 4.3% CTR Target</span>
                </div>
              </div>
            </div>

            {/* Action underneath */}
            <div className="flex items-center justify-between pt-2 px-1">
              <span className="text-xs text-neutral-500 font-mono">Click to preview style details</span>
              <button
                type="button"
                onClick={onSelectFeaturedVideo}
                className="text-xs font-bold text-white hover:text-blue-400 flex items-center gap-1.5 transition-colors"
              >
                <span>Preview Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
