import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Services } from './components/Services';
import { WorkflowSection } from './components/WorkflowSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { DeveloperNoteModal } from './components/DeveloperNoteModal';
import { PORTFOLIO_VIDEOS } from './data/portfolioData';
import { VideoItem } from './types';
import { Code2 } from 'lucide-react';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isDevGuideOpen, setIsDevGuideOpen] = useState(false);

  const handleExplorePortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeaturedVideo = () => {
    // Open the first beauty UGC ad or featured item
    setSelectedVideo(PORTFOLIO_VIDEOS[0]);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExplorePortfolio={handleExplorePortfolio}
          onSelectFeaturedVideo={handleSelectFeaturedVideo}
        />

        {/* Portfolio Grid Section */}
        <PortfolioGrid onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* About Section */}
        <About />

        {/* Services Section: 3 short cards */}
        <Services />

        {/* 48h Production Workflow */}
        <WorkflowSection />

        {/* Contact Section: Simple mailto button */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video Player Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Floating Developer Helper Badge */}
      <aside
        id="dev-helper-pill"
        className="fixed bottom-4 right-4 z-40"
        aria-label="Developer controls"
      >
        <button
          type="button"
          onClick={() => setIsDevGuideOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <Code2 className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline">Swap Assets & Vercel Guide</span>
          <span className="sm:hidden">Dev Guide</span>
        </button>
      </aside>

      {/* Developer Instructions Guide Modal */}
      <DeveloperNoteModal
        isOpen={isDevGuideOpen}
        onClose={() => setIsDevGuideOpen(false)}
      />
    </div>
  );
}
