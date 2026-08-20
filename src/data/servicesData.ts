import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ugc-ads',
    number: '01',
    title: 'UGC-Style Ads',
    oneLiner: 'Authentic creator-style videos and high-converting customer testimonials with realistic AI actors.',
    description: 'Bypass talent casting and expensive creator delays with hyper-engaging, direct-response UGC videos tailored for TikTok, Instagram Reels, and Meta Ads.',
    deliverables: [
      'Authentic phone-held POV and selfie angles',
      'Realistic multilingual AI voiceovers with emotional pacing',
      'Dynamic on-screen captions & sound design',
      'Optimized for TikTok, Instagram Reels & YouTube Shorts',
    ],
    turnaround: '24–48 Hours',
    badge: 'High Conversion',
    iconName: 'UserCheck',
  },
  {
    id: 'cgi-ads',
    number: '02',
    title: 'CGI Product Ads',
    oneLiner: 'Photorealistic 3D product visuals, dynamic fluid simulations, and floating exploded assemblies.',
    description: 'Transform standard 2D packaging or CAD models into cinematic 4K CGI motion commercials with zero-gravity physics, macro textures, and lighting.',
    deliverables: [
      'Raytraced 3D product modeling & textures',
      'Fluid, particle, splash & smoke simulations',
      'Exploded architectural mechanical assemblies',
      'Studio-grade volumetric lighting & cinematic camera passes',
    ],
    turnaround: '48–72 Hours',
    badge: '3D CGI',
    iconName: 'Sparkles',
  },
  {
    id: 'hook-variation-packages',
    number: '03',
    title: 'Multiple Hook / Variation Packages',
    oneLiner: 'Batch-generated creative variations with 5+ unique opening hooks and CTAs to maximize ad spend testing.',
    description: 'Feed ad algorithms the volume they crave. We generate multiple visual angles, problem statements, and call-to-actions from a single campaign brief.',
    deliverables: [
      '5 to 15 distinct 3-second opening hook variations',
      'A/B tested body angles & emotional triggers',
      'Multiple CTA outro slides with discount banners',
      'Organized naming taxonomy ready for Meta & TikTok Ads Manager',
    ],
    turnaround: '48 Hours',
    badge: 'Scale ROAS',
    iconName: 'Layers',
  },
];
