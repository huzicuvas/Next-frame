import React from 'react';
import { Sparkles, ArrowRight, Grid } from 'lucide-react';
import { PORTFOLIO_VIDEOS } from '../data/portfolioData';
import { VideoItem } from '../types';
import { VideoCard } from './VideoCard';

interface PortfolioGridProps {
  onSelectVideo: (video: VideoItem) => void;
  onNavigateToGallery?: () => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  onSelectVideo,
  onNavigateToGallery,
}) => {
  // Homepage displays exactly the first 4 curated videos in a 2x2 grid
  const homepageVideos = PORTFOLIO_VIDEOS.slice(0, 4);

  const handleGalleryClick = (e: React.MouseEvent) => {
    if (onNavigateToGallery) {
      e.preventDefault();
      onNavigateToGallery();
    }
  };

  return (
    <section
      id="portfolio"
      className="py-16 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>FEATURED AD FORMATS</span>
            </div>
            <h2
              id="portfolio-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Ad formats built to convert.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl">
              Proven creative frameworks: UGC creator avatars, 3D CGI product simulations, kinetic fast cuts, and desk POV workflows.
            </p>
          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-full self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Ready for custom brand video drops</span>
          </div>
        </div>

        {/* Exactly 4 videos in a 2x2 Grid */}
        <div
          id="portfolio-grid-items"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {homepageVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={onSelectVideo}
            />
          ))}
        </div>

        {/* View Full Gallery CTA Button below the 2x2 grid */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            id="view-full-gallery-btn"
            onClick={handleGalleryClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 text-white text-sm font-bold shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Grid className="w-4 h-4 text-blue-400" />
            <span>View Full Gallery ({PORTFOLIO_VIDEOS.length}+ Styles)</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>
          <p className="text-xs font-mono text-neutral-500 mt-3">
            Browse all ad format blueprints, categories, and performance metrics
          </p>
        </div>
      </div>
    </section>
  );
};
