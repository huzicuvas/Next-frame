import React from 'react';
import { Zap, Camera, Sparkles, CheckCircle2, Clock, DollarSign, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Bento Card: Core Story & Mission (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700/60 text-[11px] font-mono text-neutral-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>ABOUT THE STUDIO</span>
              </div>

              <h2
                id="about-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug"
              >
                High-converting ad creative, <br className="hidden sm:inline" />
                <span className="text-neutral-400">built without film crew overhead.</span>
              </h2>

              {/* 2-3 sentences explanation */}
              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mt-6">
                <p>
                  <strong className="text-white font-semibold">Nextframe</strong> makes high-converting UGC-style and photorealistic CGI-style ad content for modern brands using state-of-the-art generative AI pipelines.
                </p>
                <p className="text-neutral-400">
                  By combining synthetic creator avatars, 3D volumetric rendering, and automated hook variation systems, we deliver broadcast-ready video ads with unprecedented 48-hour turnarounds.
                </p>
                <p className="text-neutral-400">
                  No expensive camera rentals, no casting calls, and no multi-week shoot schedules — just high-performing, iterative ad creatives designed to scale your ROAS.
                </p>
              </div>
            </div>

            {/* Key Pillars Bento Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-8 mt-6 border-t border-neutral-800">
              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">48h Delivery Speed</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Brief to final ready cut in 2 days</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-neutral-800 text-neutral-300">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Zero Crew Overhead</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">100% generative AI & CGI pipeline</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Bento Card: Comparative Advantage Matrix (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">Production Benchmark</span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  Nextframe vs Legacy
                </span>
              </div>

              <div className="divide-y divide-neutral-800/60 space-y-4 pt-4">
                {/* Metric 1 */}
                <div className="pt-3 space-y-1.5">
                  <div className="text-xs font-mono text-neutral-400 uppercase">Turnaround Speed</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Nextframe: 48h</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/50 text-xs text-neutral-500 line-through">
                      Legacy: 4-6 Wks
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="pt-3 space-y-1.5">
                  <div className="text-xs font-mono text-neutral-400 uppercase">Production Cost</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>85% Lower Cost</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/50 text-xs text-neutral-500 line-through">
                      $5k–$25k / Shoot
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="pt-3 space-y-1.5">
                  <div className="text-xs font-mono text-neutral-400 uppercase">Hook Variations</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>5–15 Variants</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/50 text-xs text-neutral-500 line-through">
                      1 Single Cut
                    </div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="pt-3 space-y-1.5">
                  <div className="text-xs font-mono text-neutral-400 uppercase">Talent & Logistics</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>AI Avatars & 3D</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/50 text-xs text-neutral-500 line-through">
                      Casting & Sets
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
              <span className="text-blue-400">✦</span>
              <span>Engineered for brands spending $10k+ / month on Meta & TikTok Ads.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
