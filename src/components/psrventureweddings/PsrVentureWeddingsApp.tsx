import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  MessageSquare, 
  Sparkles, 
  Phone, 
  ArrowUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { 
  PSR_DESTINATIONS, 
  PSR_VENUES, 
  PSR_SERVICES, 
  PSR_PACKAGES, 
  DestinationItem, 
  VenueItem, 
  WeddingServiceItem 
} from '../../data/psrWeddingsData';

import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { PsrNavbar, PsrNavTab } from './PsrNavbar';
import { PsrFooter } from './PsrFooter';
import { PsrHero } from './PsrHero';
import { PsrDestinationsSection } from './PsrDestinationsSection';
import { PsrDestinationDetailModal } from './PsrDestinationDetailModal';
import { PsrVenuesSection } from './PsrVenuesSection';
import { PsrVenueDetailModal } from './PsrVenueDetailModal';
import { PsrServicesSection } from './PsrServicesSection';
import { PsrServiceDetailModal } from './PsrServiceDetailModal';
import { PsrPackagesSection } from './PsrPackagesSection';
import { PsrExperienceSection } from './PsrExperienceSection';
import { PsrPortfolioSection } from './PsrPortfolioSection';
import { PsrBudgetCalculator } from './PsrBudgetCalculator';
import { PsrBlogSection } from './PsrBlogSection';
import { PsrFaqSection } from './PsrFaqSection';
import { PsrConsultationModal } from './PsrConsultationModal';
import { PsrAboutPage } from './PsrAboutPage';
import { PsrContactPage } from './PsrContactPage';

interface PsrVentureWeddingsAppProps {
  onBackToHub?: () => void;
}

export const PsrVentureWeddingsApp: React.FC<PsrVentureWeddingsAppProps> = ({
  onBackToHub
}) => {
  const [activeTab, setActiveTab] = useState<PsrNavTab>('home');
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<VenueItem | null>(null);
  const [selectedService, setSelectedService] = useState<WeddingServiceItem | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationDest, setConsultationDest] = useState('');
  const [consultationTarget, setConsultationTarget] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync document title and meta description
  useEffect(() => {
    document.title = `${siteConfig.SITE_NAME} | Destination Wedding Planner India & Luxury Venues`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', siteConfig.SITE_DESCRIPTION);
    }
  }, []);

  const handleOpenConsultation = (destinationOrTarget?: string) => {
    if (destinationOrTarget) {
      // Check if it's a known destination
      const foundDest = PSR_DESTINATIONS.find(d => d.name.toLowerCase() === destinationOrTarget.toLowerCase() || d.slug === destinationOrTarget.toLowerCase());
      if (foundDest) {
        setConsultationDest(foundDest.name);
        setConsultationTarget('');
      } else {
        setConsultationDest('');
        setConsultationTarget(destinationOrTarget);
      }
    } else {
      setConsultationDest('');
      setConsultationTarget('');
    }
    setConsultationOpen(true);
  };

  const handleSelectDestinationBySlug = (slug: string) => {
    const dest = PSR_DESTINATIONS.find(d => d.slug === slug);
    if (dest) {
      setSelectedDestination(dest);
    } else {
      setActiveTab('destinations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tab: PsrNavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${siteConfig.SITE_NAME}, I am browsing your website and would like to explore options for our destination wedding.`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#120306] text-stone-100 font-['Inter',system-ui,sans-serif] selection:bg-[#C5A059] selection:text-[#1A0509]">
      {/* RaoSitez Reference Switcher Integration */}
      <ReferenceSiteSwitcher currentSiteId="psr-venture-weddings" />

      {/* Navigation Header */}
      <PsrNavbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenConsultation={() => handleOpenConsultation()}
        onBackToHub={onBackToHub}
      />

      {/* MAIN VIEW CONTENT ROUTING */}
      <main>
        {activeTab === 'home' && (
          <>
            {/* 1. Hero Section */}
            <PsrHero
              onOpenConsultation={handleOpenConsultation}
              onSelectTab={handleSelectTab}
              onSelectDestination={handleSelectDestinationBySlug}
            />

            {/* 2. Destination Section */}
            <PsrDestinationsSection
              onSelectDestination={handleSelectDestinationBySlug}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* 3. Featured Wedding Venues */}
            <PsrVenuesSection
              onSelectVenue={venue => setSelectedVenue(venue)}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* 4. Wedding Planning Services */}
            <PsrServicesSection
              onSelectService={srv => setSelectedService(srv)}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* 5. The Wedding Experience Journey */}
            <PsrExperienceSection
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* 6. Wedding Packages */}
            <PsrPackagesSection
              onOpenConsultation={handleOpenConsultation}
            />

            {/* 7. Real Weddings & Portfolio */}
            <PsrPortfolioSection
              onOpenConsultation={handleOpenConsultation}
            />

            {/* 8. Interactive Budget Calculator */}
            <PsrBudgetCalculator
              onOpenConsultation={handleOpenConsultation}
            />

            {/* 9. Blog & Insights */}
            <PsrBlogSection
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* 10. FAQs */}
            <PsrFaqSection
              onOpenConsultation={() => handleOpenConsultation()}
            />
          </>
        )}

        {/* DEDICATED VIEW: ABOUT */}
        {activeTab === 'about' && (
          <PsrAboutPage onOpenConsultation={() => handleOpenConsultation()} />
        )}

        {/* DEDICATED VIEW: DESTINATIONS */}
        {activeTab === 'destinations' && (
          <div className="pt-6">
            <PsrDestinationsSection
              onSelectDestination={handleSelectDestinationBySlug}
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        )}

        {/* DEDICATED VIEW: VENUES */}
        {activeTab === 'venues' && (
          <div className="pt-6">
            <PsrVenuesSection
              onSelectVenue={venue => setSelectedVenue(venue)}
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        )}

        {/* DEDICATED VIEW: SERVICES */}
        {activeTab === 'services' && (
          <div className="pt-6">
            <PsrServicesSection
              onSelectService={srv => setSelectedService(srv)}
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        )}

        {/* DEDICATED VIEW: PACKAGES */}
        {activeTab === 'packages' && (
          <div className="pt-6">
            <PsrPackagesSection
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        )}

        {/* DEDICATED VIEW: PORTFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="pt-6">
            <PsrPortfolioSection
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        )}

        {/* DEDICATED VIEW: CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="pt-6">
            <PsrBudgetCalculator
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        )}

        {/* DEDICATED VIEW: BLOG */}
        {activeTab === 'blog' && (
          <div className="pt-6">
            <PsrBlogSection
              onOpenConsultation={() => handleOpenConsultation()}
            />
          </div>
        )}

        {/* DEDICATED VIEW: CONTACT */}
        {activeTab === 'contact' && (
          <PsrContactPage />
        )}
      </main>

      {/* Modals */}
      <PsrDestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <PsrVenueDetailModal
        venue={selectedVenue}
        onClose={() => setSelectedVenue(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <PsrServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <PsrConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialDestination={consultationDest}
        initialServiceOrVenue={consultationTarget}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-[#1A0509]/90 border border-[#C5A059]/40 text-[#DFBE78] hover:bg-[#C5A059] hover:text-[#1A0509] flex items-center justify-center shadow-2xl transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp CTA */}
        <button
          onClick={openWhatsApp}
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 cursor-pointer border-2 border-white/20 group relative"
          aria-label="Chat with Wedding Director on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-black/90 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-500/30">
            Chat with Director
          </span>
        </button>
      </div>

      {/* Mobile Bottom Fixed Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#1A0509]/95 backdrop-blur-md border-t border-[#C5A059]/30 p-3 flex items-center gap-3">
        <button
          onClick={openWhatsApp}
          className="flex-1 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={() => handleOpenConsultation()}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Plan Wedding</span>
        </button>
      </div>

      {/* Luxury Footer */}
      <PsrFooter
        onSelectTab={handleSelectTab}
        onSelectDestination={handleSelectDestinationBySlug}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
};
