import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Filter, Video, Search, Mail, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_VIDEOS } from '../data/portfolioData';
import { CategoryType, VideoItem } from '../types';
import { VideoCard } from './VideoCard';
import { HookFramesLogo } from './HookFramesLogo';

interface GalleryPageProps {
  onNavigateHome: () => void;
  onSelectVideo: (video: VideoItem) => void;
}

const CATEGORIES: CategoryType[] = [
  'All',
  'Beauty',
  'Tech',
  'Food',
  'Testimonial',
  'CGI',
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigateHome,
  onSelectVideo,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = PORTFOLIO_VIDEOS.filter((video) => {
    const matchesCategory = activeCategory === 'All' || video.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.hookHeadline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Header & Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-neutral-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Back to Home Link */}
          <button
            type="button"
            id="gallery-back-home-btn"
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-all shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          {/* Center Logo */}
          <div
            onClick={onNavigateHome}
            className="cursor-pointer hidden sm:flex items-center"
          >
            <HookFramesLogo size="sm" />
          </div>

          {/* Quick Action */}
          <a
            href="mailto:kiramorganai@gmail.com?subject=New%20Ad%20Creative%20Inquiry%20from%20Gallery&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20browsing%20your%20creative%20gallery%20and%20want%20to%20produce%20ads%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AProduct%20Link:%20%0A"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-blue-500 text-black hover:text-white text-xs font-bold transition-colors shadow-md active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Gallery Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        {/* Page Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-neutral-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>FULL CREATIVE LIBRARY & STYLE BLUEPRINTS</span>
            </div>

            <h1
              id="gallery-page-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Creative Format Gallery
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              Explore our complete library of high-converting ad frameworks across synthetic UGC, 3D CGI product simulations, ASMR audio unboxings, and kinetic cuts. Ready for instant custom brand asset drops.
            </p>
          </div>

          {/* Stats Pill */}
          <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-5 py-3 rounded-2xl self-start md:self-auto">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-mono leading-none">
                {PORTFOLIO_VIDEOS.length} Formats
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                No Item Limit • Expanding
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === 'All'
                  ? PORTFOLIO_VIDEOS.length
                  : PORTFOLIO_VIDEOS.filter((v) => v.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  id={`gallery-filter-${cat.toLowerCase()}`}
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

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search formats, hooks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Gallery Videos Grid (No item limit) */}
        <div
          id="gallery-grid-items"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={onSelectVideo}
            />
          ))}
        </div>

        {/* Empty state if search or filter returns zero */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16 bg-neutral-900 rounded-3xl border border-neutral-800 p-8 max-w-lg mx-auto">
            <p className="text-neutral-400 text-sm">No creative format matched your search "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Contact Callout */}
        <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Have a custom ad concept or specific product angle?</h3>
            <p className="text-xs sm:text-sm text-neutral-400">Send us your product URL and we'll craft bespoke 9:16 vertical hook cuts for your paid campaigns.</p>
          </div>
          <a
            href="mailto:kiramorganai@gmail.com?subject=Custom%20Ad%20Format%20Inquiry%20-%20Hook%20Frames%20Studio&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20creating%20performance%20video%20ads%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AProduct%20Link:%20%0ADesired%20Format:%20%0A"
            className="shrink-0 px-6 py-3.5 rounded-full bg-white hover:bg-blue-500 text-black hover:text-white text-xs font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email kiramorganai@gmail.com</span>
          </a>
        </div>
      </main>
    </div>
  );
};
