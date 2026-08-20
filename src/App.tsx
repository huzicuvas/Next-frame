import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { AboutServicesCombined } from './components/AboutServicesCombined';
import { WorkflowSection } from './components/WorkflowSection';
import { GeminiChatbot } from './components/GeminiChatbot';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { DeveloperNoteModal } from './components/DeveloperNoteModal';
import { GalleryPage } from './components/GalleryPage';
import { PORTFOLIO_VIDEOS } from './data/portfolioData';
import { VideoItem } from './types';
import { Bot, MessageSquare, X, Code2, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isDevGuideOpen, setIsDevGuideOpen] = useState(false);
  const [isFloatingChatOpen, setIsFloatingChatOpen] = useState(false);
  const [showChatTooltip, setShowChatTooltip] = useState(true);

  // Sync route on popstate (browser back/forward) and deep-linked video hash
  useEffect(() => {
    const checkHashForVideo = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = PORTFOLIO_VIDEOS.find((v) => v.id === hash);
        if (found) {
          setSelectedVideo(found);
        }
      }
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      checkHashForVideo();
      window.scrollTo(0, 0);
    };

    // Check on initial mount
    checkHashForVideo();

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', checkHashForVideo);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', checkHashForVideo);
    };
  }, []);

  // Auto-dismiss tooltip after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatTooltip(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateHome = () => {
    navigateTo('/');
  };

  const navigateToGallery = () => {
    navigateTo('/gallery');
  };

  const handleExplorePortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeaturedVideo = () => {
    setSelectedVideo(PORTFOLIO_VIDEOS[0]);
  };

  const handleOpenChat = () => {
    setShowChatTooltip(false);
    setIsFloatingChatOpen(true);
  };

  const isGalleryView = currentPath === '/gallery' || currentPath === '/gallery/';

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {isGalleryView ? (
        /* Full Gallery View at /gallery */
        <GalleryPage
          onNavigateHome={navigateHome}
          onSelectVideo={(video) => setSelectedVideo(video)}
        />
      ) : (
        /* Standard Homepage View */
        <>
          {/* Top Sticky Navigation */}
          <Navbar
            onNavigateToGallery={navigateToGallery}
            onNavigateHome={navigateHome}
            onOpenChat={handleOpenChat}
          />

          <main>
            {/* Hero Section */}
            <Hero
              onExplorePortfolio={handleExplorePortfolio}
              onSelectFeaturedVideo={handleSelectFeaturedVideo}
              onGetQuote={handleGetQuote}
            />

            {/* Homepage Portfolio Grid (Exactly 4 videos in 2x2 with View Full Gallery CTA) */}
            <PortfolioGrid
              onSelectVideo={(video) => setSelectedVideo(video)}
              onNavigateToGallery={navigateToGallery}
            />

            {/* Combined About & Specialized Services Section + About the Team */}
            <AboutServicesCombined />

            {/* 48h Production Workflow */}
            <WorkflowSection />

            {/* Quick-Tier Contact & Pricing Section (Single source of pricing) */}
            <Contact />
          </main>

          {/* Footer with Hook Frames Studio Logo */}
          <Footer onNavigateToGallery={navigateToGallery} />
        </>
      )}

      {/* Video Player Modal (Active across both Homepage and Gallery) */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Floating Circular Chat & Helper Widget */}
      <aside
        id="floating-chat-widget"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 select-none"
        aria-label="Interactive Studio Assistant"
      >
        {/* First-load One-time Tooltip / Popup */}
        {showChatTooltip && !isFloatingChatOpen && (
          <div
            id="chat-tooltip-popup"
            onClick={handleOpenChat}
            className="group relative cursor-pointer bg-neutral-900 text-white text-xs font-medium px-4 py-3 rounded-2xl border border-neutral-700 shadow-2xl backdrop-blur-md flex items-center gap-3 transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs"
          >
            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 pr-1 leading-snug">
              <p className="text-neutral-200">Ask a question? I'm here to help</p>
            </div>
            <button
              type="button"
              id="dismiss-tooltip-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowChatTooltip(false);
              }}
              title="Dismiss"
              className="text-neutral-400 hover:text-white p-1 rounded-md hover:bg-neutral-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Speech bubble pointer arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-neutral-900 border-r border-b border-neutral-700 rotate-45 transform" />
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Discrete Dev Guide Trigger */}
          <button
            type="button"
            onClick={() => setIsDevGuideOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-[11px] font-mono text-neutral-400 hover:text-white backdrop-blur-md shadow-lg transition-all"
            title="Developer asset swapping & build notes"
          >
            <Code2 className="w-3 h-3 text-blue-400" />
            <span>Dev Guide</span>
          </button>

          {/* Floating Circular Chat Button */}
          <button
            type="button"
            id="floating-circular-chat-btn"
            onClick={handleOpenChat}
            title="Ask a question? Open Studio Assistant"
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center border border-blue-400/40 transition-all duration-200 hover:scale-110 active:scale-95 group relative focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            <Bot className="w-6 h-6 transition-transform group-hover:rotate-6" />
            {/* Live indicator dot */}
            <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-neutral-950 absolute top-0.5 right-0.5 animate-pulse" />
          </button>
        </div>
      </aside>

      {/* Floating Gemini Chat Modal */}
      <GeminiChatbot
        isFloatingModal={true}
        isOpen={isFloatingChatOpen}
        onClose={() => setIsFloatingChatOpen(false)}
      />

      {/* Developer Instructions Guide Modal */}
      <DeveloperNoteModal
        isOpen={isDevGuideOpen}
        onClose={() => setIsDevGuideOpen(false)}
      />
    </div>
  );
}
