import React from 'react';
import { UserCheck, Sparkles, Layers, Zap, Camera, Users, ShieldCheck } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Story & Production Model (Approachable, jargon-free) */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>ABOUT & PRODUCTION MODEL</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              High-converting ad creative, <br className="hidden sm:inline" />
              <span className="text-neutral-400">built without film crew overhead.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mt-6">
              Hook Frames Studio produces high-converting UGC-style and CGI product ad content for brands — fast turnaround, no film crew, no scheduling headaches. We turn product photos and key selling points into broadcast-ready video ads in as little as 48 hours.
            </p>
          </div>

          {/* Two Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-neutral-800 max-w-2xl">
            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">48h Delivery Speed</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Brief to ready cut in as little as 2 days</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-800 text-neutral-300 shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Zero Crew Overhead</h4>
                <p className="text-xs text-neutral-400 mt-0.5">No actors to book, sets to build, or gear to haul</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Specialized Core Formats (Shortened & Simplified) */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Specialized Formats
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              3 Core Styles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="flex flex-col justify-between bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 p-6 sm:p-7 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-blue-400">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {service.oneLiner}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About the Team Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>ABOUT THE TEAM</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Hands-On Direct Attention
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Hook Frames Studio is run by a small, focused team — a founder handling creative direction and production, Kira as our on-camera presenter, and a network of collaborators we bring in for larger projects. No account managers, no handoffs — you work directly with the people making your content.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-white font-semibold font-sans text-xs">Direct Collaboration</p>
                <p className="text-[11px] text-neutral-400">Zero account manager bloat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
