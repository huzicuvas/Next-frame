import React from 'react';
import { UserCheck, Sparkles, Layers, Zap, Camera, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export const AboutServicesCombined: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-16 bg-[#0A0A0B]">
      {/* Anchor for services navigation */}
      <div id="services" className="-translate-y-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Story & Pipeline Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mb-8">
          {/* Main Story Bento (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700/60 text-[11px] font-mono text-neutral-300 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>ABOUT & PRODUCTION MODEL</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                High-converting ad creative, <br className="hidden sm:inline" />
                <span className="text-neutral-400">built without film crew overhead.</span>
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mt-5">
                <p>
                  <strong className="text-white font-semibold">Hook Frames Studio</strong> produces high-converting UGC-style and photorealistic CGI product ad content for modern brands using an end-to-end generative AI and 3D pipeline.
                </p>
                <p className="text-neutral-400 text-sm">
                  No camera rentals, no physical shoot sets, and no scheduling delays. We turn your product links and selling points into broadcast-ready video ads with unprecedented 48-hour turnarounds.
                </p>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-neutral-800">
              <div className="p-3.5 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">48h Delivery Speed</h4>
                  <p className="text-[11px] text-neutral-400">Brief to ready cut in 2 days</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-neutral-800 text-neutral-300 shrink-0">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Zero Crew Overhead</h4>
                  <p className="text-[11px] text-neutral-400">100% generative AI & CGI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmark Matrix (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">Production Benchmark</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  Hook Frames vs Legacy
                </span>
              </div>

              <div className="divide-y divide-neutral-800/60 space-y-3 pt-3">
                <div className="pt-2.5 space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Turnaround Speed</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Hook Frames: 48h</span>
                    </div>
                    <div className="p-2 rounded-xl bg-neutral-950/40 border border-neutral-800/50 text-xs text-neutral-500 line-through">
                      Legacy: 4-6 Wks
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Production Cost</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>85% Lower Cost</span>
                    </div>
                    <div className="p-2 rounded-xl bg-neutral-950/40 border border-neutral-800/50 text-xs text-neutral-500 line-through">
                      $5k–$25k / Shoot
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Hook Testing</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-bold text-blue-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>3–5+ Hook Variations</span>
                    </div>
                    <div className="p-2 rounded-xl bg-neutral-950/40 border border-neutral-800/50 text-xs text-neutral-500 line-through">
                      1 Single Cut
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <span className="text-blue-400">✦</span>
              <span>Full commercial rights and ad manager ready exports.</span>
            </div>
          </div>
        </div>

        {/* 3 Specialized Core Formats (Combined Services) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative flex flex-col justify-between bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 p-7 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-neutral-300 leading-snug">
                    {service.oneLiner}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-0.5">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="text-blue-400 text-xs mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                  <Clock className="w-3 h-3 text-neutral-500" />
                  <span>{service.turnaround}</span>
                </div>

                <a
                  href={`mailto:hello@hookframes.studio?subject=Inquiry%20for%20${encodeURIComponent(service.title)}&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.%0A%0ABrand%20Name:%20%0AWebsite:%20%0A`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Select Format</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
