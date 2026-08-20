import React from 'react';
import { UploadCloud, Cpu, Sparkles, SendHorizontal, Layers, CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Send Brief & Product Asset',
      description: 'Provide your website, product photos, or key selling angles. No shipping samples required for CGI — digital assets are all we need.',
      icon: <UploadCloud className="w-5 h-5 text-blue-400" />,
      tag: 'Step 1 • 15 Mins',
    },
    {
      step: '02',
      title: 'Generative AI & 3D CGI Pipeline',
      description: 'We generate authentic creator scripts, synthetic UGC avatar performances, and 3D fluid/exploded visual effects with studio lighting.',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      tag: 'Step 2 • 24 Hours',
    },
    {
      step: '03',
      title: 'Receive 5+ Hook Variations',
      description: 'Get final 9:16 and 1:1 cut-downs with captions, sound effects, and organized naming taxonomy ready to drop straight into Ads Manager.',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      tag: 'Step 3 • 48 Hours',
    },
  ];

  return (
    <section
      id="workflow"
      className="py-16 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>48-HOUR AD PIPELINE</span>
          </div>
          <h2
            id="workflow-title"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            How Nextframe delivers ad content fast
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            A frictionless, crewless ad production pipeline built for high-growth paid social teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-all group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Zero talent scheduling friction</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
