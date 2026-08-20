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
import { Code2, Bot } from 'lucide-react';

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

  // Sync route on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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

            {/* Combined About & Specialized Services Section */}
            <AboutServicesCombined />

            {/* 48h Production Workflow */}
            <WorkflowSection />

            {/* Gemini Studio Q&A & Pricing Section */}
            <section id="faq-assistant" className="py-16 bg-[#0A0A0B] border-t border-neutral-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>INTERACTIVE STUDIO Q&A & PRICING DESK</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    What We Make, How We Make It, & <br />
                    <span className="text-neutral-400">Pricing & Commercial Terms.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal">
                    Ask our interactive studio assistant anything about deliverables, batch pricing, the 48-hour production pipeline, or commercial rights.
                  </p>
                </div>

                {/* Embedded Bento Chatbot */}
                <GeminiChatbot />
              </div>
            </section>

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

      {/* Floating Action Controls */}
      <aside
        id="floating-actions-bar"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5"
        aria-label="Floating tools"
      >
        <button
          type="button"
          id="open-floating-ai-btn"
          onClick={() => setIsFloatingChatOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 border border-blue-400/30"
        >
          <Bot className="w-4 h-4" />
          <span>Ask Q&A & Pricing</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
        </button>

        <button
          type="button"
          onClick={() => setIsDevGuideOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <Code2 className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline">Swap Assets & Deploy</span>
          <span className="sm:hidden">Dev Guide</span>
        </button>
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
