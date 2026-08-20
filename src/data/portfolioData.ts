import { VideoItem } from '../types';

/**
 * Hook Frames Studio - Portfolio Showcase Data
 * Reduced to 5 curated ad format style templates ready for custom brand video uploads.
 * Each card includes a "Sample Style" badge.
 */
export const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'sample-style-ugc-skincare',
    title: 'Problem-Agitation UGC Reel',
    brand: 'Beauty / Skincare Brand Slot',
    category: 'Beauty',
    thumbnailUrl: '', // Ready for user's uploaded image/video asset
    videoUrl: '',
    duration: '0:18',
    aspectRatio: '9:16',
    hookHeadline: '"I stopped buying $120 serums after testing this AI-formulated dew..."',
    description: 'Authentic UGC creator layout with problem/solution pacing, split screen comparisons, and native on-screen TikTok captions.',
    metrics: {
      hookRate: '48.2%',
      ctr: '4.3%',
      roas: '3.9x',
    },
    tags: ['UGC Creator', 'TikTok / Reels', 'Problem-Agitate', 'Sample Style'],
  },
  {
    id: 'sample-style-3d-cgi-hardware',
    title: '3D CGI Exploded View Ad',
    brand: 'Tech / Consumer Hardware Slot',
    category: 'Tech',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:22',
    aspectRatio: '9:16',
    hookHeadline: '"CGI Exploded View: See the internal acoustic chamber silence ambient noise."',
    description: 'Photorealistic 3D CGI product animation highlighting internal components, raytraced metallic textures, and fluid physics.',
    metrics: {
      hookRate: '54.5%',
      ctr: '5.2%',
      roas: '4.6x',
    },
    tags: ['3D CGI', 'Exploded View', 'Tech Gadget', 'Sample Style'],
  },
  {
    id: 'sample-style-fast-cut-beverage',
    title: 'High-Energy Fast-Cut Promo',
    brand: 'Food & Beverage / Wellness Slot',
    category: 'Food',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:15',
    aspectRatio: '9:16',
    hookHeadline: '"Why 30,000 coffee drinkers switched to morning jitter-free focus..."',
    description: 'Fast-paced kinetic typography, fluid dynamic splashes, morning routine POV, and energetic sound design.',
    metrics: {
      hookRate: '42.8%',
      ctr: '3.8%',
      roas: '3.5x',
    },
    tags: ['Kinetic Cuts', 'Beverage Splash', 'Routine POV', 'Sample Style'],
  },
  {
    id: 'sample-style-b2b-saas-workflow',
    title: 'Desk POV Workflow Testimonial',
    brand: 'App / Software / SaaS Slot',
    category: 'Testimonial',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:25',
    aspectRatio: '9:16',
    hookHeadline: '"I used to waste 14 hours a week until our team started using this..."',
    description: 'Authentic desk setup POV with dynamic screen insert overlays, user testimonial delivery, and frictionless signup CTA.',
    metrics: {
      hookRate: '49.1%',
      ctr: '4.7%',
      roas: '4.1x',
    },
    tags: ['SaaS Demo', 'Desk POV', 'Workflow Hook', 'Sample Style'],
  },
  {
    id: 'sample-style-3d-fluid-splash',
    title: 'Macro Fluid Dynamics & Packaging',
    brand: 'DTC Brand / Luxury Goods Slot',
    category: 'CGI',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:14',
    aspectRatio: '9:16',
    hookHeadline: '"Ultra-realistic zero-gravity ice & citrus fluid simulation in 4K."',
    description: 'Cinema-grade 3D fluid simulations, condensation droplets, luxury studio lighting, and zero-gravity rotating packshot.',
    metrics: {
      hookRate: '59.2%',
      ctr: '6.4%',
      roas: '5.3x',
    },
    tags: ['Fluid Sim', '3D Packaging', 'Macro Texture', 'Sample Style'],
  },
];
