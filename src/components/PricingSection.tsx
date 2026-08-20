import React from 'react';
import { Check, Zap, Sparkles, ArrowRight, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const pricingTiers = [
    {
      id: 'single-video',
      name: 'Single Video',
      tagline: 'Best for single product test angles or simple promotional drops.',
      price: '$75',
      pricePrefix: 'Starting at',
      duration: '15–30 sec',
      badge: 'Starter',
      isPopular: false,
      included: [
        '1 final high-converting video ad',
        '15 to 30 second runtime',
        'Full AI voiceover / audio design',
        '9:16 vertical & 1:1 format cut',
        'Full commercial usage rights',
        '48-hour delivery',
      ],
      ctaLabel: 'Get Single Video',
      mailtoSubject: 'Inquiry: Single Video Ad ($75)',
    },
    {
      id: 'hook-variation-pack',
      name: 'Hook Variation Pack',
      tagline: 'Engineered for ad testing. 3 distinct 3-second hooks to unlock maximum ROAS.',
      price: '$200',
      pricePrefix: 'Starting at',
      duration: '3 videos (15–30s each)',
      badge: 'Most Popular',
      isPopular: true,
      included: [
        '3 distinct video variations',
        '3 different opening hooks (problem, POV, ASMR)',
        '15 to 30 seconds per video',
        'Optimized for Meta & TikTok Ads Manager',
        'Dynamic on-screen captions & SFX',
        'Organized naming taxonomy for A/B testing',
        '48 to 72-hour delivery',
      ],
      ctaLabel: 'Get Hook Pack',
      mailtoSubject: 'Inquiry: Hook Variation Pack ($200)',
    },
    {
      id: '60-sec-video',
      name: '60-Second Video',
      tagline: 'Full-length story ad for complex products, in-depth breakdowns, or SaaS demos.',
      price: '$150',
      pricePrefix: 'Starting at',
      duration: 'Full 60 sec',
      badge: 'Deep Dive',
      isPopular: false,
      included: [
        'Full 60-second in-depth narrative',
        '1 polished master cut',
        'Multi-scene problem/solution breakdown',
        'Detailed feature highlights & proof points',
        'High-energy pacing & sound design',
        'Ready for YouTube Shorts, Reels & TikTok',
        'Full commercial license',
      ],
      ctaLabel: 'Get 60s Video',
      mailtoSubject: 'Inquiry: 60-Second Video ($150)',
    },
    {
      id: 'custom-brand-package',
      name: 'Custom Brand Package',
      tagline: 'Tailored for high-growth brands with multiple SKUs or monthly content pipelines.',
      price: 'Get a Quote',
      pricePrefix: 'Custom Scope',
      duration: 'Multi-video / Monthly',
      badge: 'Enterprise & Retainer',
      isPopular: false,
      included: [
        'Longer format videos or multi-SKU packs',
        'Batch production (10+ creatives / month)',
        'Ongoing monthly creative refreshes',
        'Dedicated AI creative director',
        'Custom avatar training & 3D CAD modeling',
        'Priority 24 to 48-hour turnarounds',
        'Slack / Discord channel access',
      ],
      ctaLabel: 'Request Custom Quote',
      mailtoSubject: 'Inquiry: Custom Brand Package Quote',
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 bg-[#0A0A0B] border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>TRANSPARENT PRICING & TIERS</span>
            </div>
            <h2
              id="pricing-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Simple, transparent ad pricing. <br />
              <span className="text-neutral-400">No agency retainers required.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              All tiers include generative AI & 3D pipeline production, broadcast sound design, direct ad-ready exports, and 100% commercial usage rights.
            </p>
          </div>

          {/* Guarantee Pill */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-full self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Commercial Rights Included • Fast 48h Turnaround</span>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div
          id="pricing-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              id={`pricing-card-${tier.id}`}
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 shadow-xl ${
                tier.isPopular
                  ? 'bg-neutral-900 border-2 border-blue-500/80 shadow-blue-500/10'
                  : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Featured Badge */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-500 text-white text-[11px] font-bold tracking-wide uppercase shadow-md flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-white" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header & Duration */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {tier.name}
                    </h3>
                    {!tier.isPopular && (
                      <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  {/* Duration Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-blue-300">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{tier.duration}</span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed min-h-[38px]">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-neutral-800/80">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                    {tier.pricePrefix}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                      {tier.price}
                    </span>
                    {tier.price !== 'Get a Quote' && (
                      <span className="text-xs text-neutral-500 font-mono">/ batch</span>
                    )}
                  </div>
                </div>

                {/* What's Included */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                    What's included:
                  </span>
                  <ul className="space-y-2">
                    {tier.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-neutral-800/80">
                <a
                  href={`mailto:hello@hookframes.studio?subject=${encodeURIComponent(tier.mailtoSubject)}&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20tier.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0ATarget%20Platform%20(Meta/TikTok/Shorts):%20%0ANotes%20or%20Angle%20Ideas:%20%0A`}
                  id={`cta-tier-${tier.id}`}
                  className={`w-full py-3 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    tier.isPopular
                      ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700/60'
                  }`}
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise & Custom Note */}
        <div className="mt-8 p-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white">Need multi-SKU batches or monthly scaling?</span>
              <p className="text-neutral-400 mt-0.5">We offer custom volume pricing and dedicated creative directors for high-velocity DTC brands.</p>
            </div>
          </div>
          <a
            href="mailto:hello@hookframes.studio?subject=Custom%20Brand%20Volume%20Pricing%20Inquiry&body=Hi%20Hook%20Frames%20Studio,%0A%0AWe're%20looking%20for%20custom%20monthly%20volume%20ad%20production.%0A%0ABrand%20Name:%20%0AMonthly%20Volume%20Needed:%20%0A"
            className="shrink-0 px-5 py-2.5 rounded-full bg-white hover:bg-blue-500 text-black hover:text-white font-bold transition-colors"
          >
            Contact for Custom Volume
          </a>
        </div>
      </div>
    </section>
  );
};
