import React, { useState, useEffect } from 'react';
import { Sparkles, Mail, ArrowUpRight, Menu, X, Video, Grid } from 'lucide-react';
import { HookFramesLogo } from './HookFramesLogo';

interface NavbarProps {
  onOpenContact?: () => void;
  onNavigateToGallery?: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onNavigateToGallery,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gallery', href: '/gallery', isGallery: true },
    { name: 'Services', href: '#about' },
    { name: 'Pricing & Quotes', href: '#contact' },
    { name: 'Q&A & Studio FAQ', href: '#faq-assistant' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.isGallery && onNavigateToGallery) {
      e.preventDefault();
      onNavigateToGallery();
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl shadow-black/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with exact Dark Background Icon + White Typography */}
        <a
          href="/"
          id="nav-logo"
          onClick={handleLogoClick}
          className="group flex items-center focus:outline-none"
        >
          <HookFramesLogo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-400 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`px-3 py-1 rounded-full hover:text-white hover:bg-neutral-800 transition-all duration-200 ${
                link.isGallery ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Cluster Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider">AI PIPELINE READY</span>
          </div>

          <a
            href="mailto:kiramorganai@gmail.com?subject=Ad%20Content%20Inquiry%20-%20Hook%20Frames%20Studio&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20looking%20to%20produce%20high-converting%20ad%20creatives%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0AFormat%20Needed%20(15-30s%20/%2030-60s%20/%2060s%20/%20Hook%20Pack%20/%20Custom):%20%0AEstimated%20Timeline:%20%0A"
            id="nav-cta-mailto"
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow-md active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-5 mt-3 space-y-4 animate-in slide-in-from-top duration-200 shadow-2xl"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  link.isGallery
                    ? 'text-blue-400 font-semibold bg-neutral-800/50'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 px-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>AI Pipeline Online • 48h Turnaround</span>
            </div>
            <a
              href="mailto:kiramorganai@gmail.com?subject=Ad%20Content%20Inquiry%20-%20Hook%20Frames%20Studio"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white hover:bg-blue-500 hover:text-white text-black text-sm font-bold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
