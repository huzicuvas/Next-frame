import React, { useState } from 'react';
import { Play, Sparkles, Filter, ExternalLink, Flame, Info, Video } from 'lucide-react';
import { PORTFOLIO_VIDEOS } from '../data/portfolioData';
import { CategoryType, VideoItem } from '../types';

interface PortfolioGridProps {
  onSelectVideo: (video: VideoItem) => void;
}

const CATEGORIES: CategoryType[] = [
  'All',
  'Beauty',
  'Tech',
  'Food',
  'Family',
  'Testimonial',
  'CGI',
];

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectVideo }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredVideos = activeCategory === 'All'
    ? PORTFOLIO_VIDEOS
    : PORTFOLIO_VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-16 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>PORTFOLIO GRID & AD DROPS</span>
            </div>
            <h2
              id="portfolio-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Ad formats built to convert.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl">
              Explore UGC creator reels, photorealistic CGI 3D product simulations, and hook variations across key consumer verticals.
            </p>
          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-full">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Click any card to play sample video</span>
          </div>
        </div>

        {/* Category Filters Pills */}
        <div
          id="portfolio-filters"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === 'All'
              ? PORTFOLIO_VIDEOS.length
              : PORTFOLIO_VIDEOS.filter((v) => v.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black shadow-md'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/15 text-black' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Cards Bento Grid */}
        <div
          id="portfolio-grid-items"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              id={`video-card-${video.id}`}
              onClick={() => onSelectVideo(video)}
              className="group relative flex flex-col bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-neutral-700 overflow-hidden cursor-pointer transition-all duration-300 shadow-xl"
            >
              {/* Thumbnail Container with 9:13 vertical ratio */}
              <div className="relative aspect-[9/13] w-full overflow-hidden bg-neutral-950">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/60 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-neutral-800 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    {video.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-400">
                    {video.duration}
                  </span>
                </div>

                {/* Centered Play Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Performance Metric Pill (Bottom Left of Thumbnail) */}
                {video.metrics && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-blue-300">
                    <Flame className="w-3 h-3 text-blue-400 fill-blue-400" />
                    <span>Hook: {video.metrics.hookRate}</span>
                  </div>
                )}

                {/* Format Tag (Bottom Right) */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-400 bg-black/70 px-2 py-0.5 rounded-full">
                  {video.aspectRatio}
                </div>
              </div>

              {/* Card Meta & Hook Description */}
              <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    {video.brand}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-neutral-400 italic line-clamp-2 font-normal">
                    "{video.hookHeadline}"
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded-full">
                    {video.tags[0]}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-300 group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Watch Ad <ExternalLink className="w-3 h-3 text-blue-400" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if category filter is empty */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16 bg-neutral-900 rounded-3xl border border-neutral-800 p-8">
            <p className="text-neutral-400 text-sm">No ad samples found in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-3 text-xs font-bold text-blue-400 underline"
            >
              Reset category filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
