import React from 'react';
import { UserCheck, Sparkles, Layers, ArrowUpRight, Check, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesProps {
  onSelectServiceInquiry?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceInquiry }) => {
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
    <section
      id="services"
      className="py-16 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>CORE AD PRODUCTION SERVICES</span>
          </div>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Three specialized services. <br />
            <span className="text-neutral-400">Zero production friction.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal">
            Select the ad format tailored for your growth channels. All packages include script generation, rapid iteration, and direct ad-manager ready exports.
          </p>
        </div>

        {/* 3 Short Cards Grid in Bento Style */}
        <div
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative flex flex-col justify-between bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 p-8 transition-all duration-300 shadow-xl"
            >
              {/* Top Accent & Icon */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-neutral-500">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Explicit One-Liner */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-200 leading-snug">
                    {service.oneLiner}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-neutral-800/80 space-y-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                    Included Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Turnaround & Mailto CTA */}
              <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{service.turnaround}</span>
                </div>

                <a
                  href={`mailto:hello@nextframe.studio?subject=Inquiry%20for%20${encodeURIComponent(service.title)}%20-%20Nextframe&body=Hi%20Nextframe%20team,%0A%0AWe're%20interested%20in%20your%20${encodeURIComponent(service.title)}%20package.%0A%0ABrand%20Name:%20%0ATarget%20Platform%20(Meta/TikTok/Shorts):%20%0ANumber%20of%20Creatives:%20%0A`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Request Quote</span>
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
