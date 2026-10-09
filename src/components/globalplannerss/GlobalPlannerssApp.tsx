import React, { useState, useEffect } from 'react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';
import { GlobalNavbar } from './GlobalNavbar';
import { GlobalHero } from './GlobalHero';
import { GlobalTrustStrip } from './GlobalTrustStrip';
import { GlobalValStrip } from './GlobalValStrip';
import { GlobalWeddingArc } from './GlobalWeddingArc';
import { GlobalManifesto } from './GlobalManifesto';
import { GlobalPortfolioGrid } from './GlobalPortfolioGrid';
import { GlobalNumbersSection } from './GlobalNumbersSection';
import { GlobalServicesSection } from './GlobalServicesSection';
import { GlobalMorningTimeline } from './GlobalMorningTimeline';
import { GlobalDestinationsSection } from './GlobalDestinationsSection';
import { GlobalPlanningToolsSection } from './GlobalPlanningToolsSection';
import { GlobalFounderNote } from './GlobalFounderNote';
import { GlobalVideoRail } from './GlobalVideoRail';
import { GlobalTestimonials } from './GlobalTestimonials';
import { GlobalInstagramFeed } from './GlobalInstagramFeed';
import { GlobalChannelsSection } from './GlobalChannelsSection';
import { GlobalFooter } from './GlobalFooter';
import {
  GlobalWeddingsPage,
  GlobalStoryPage,
  GlobalServicesPage,
  GlobalDestinationsPage,
  GlobalJournalPage,
  GlobalContactPage,
  GlobalPricingPlanningPage
} from './GlobalPages';
import {
  EnquiryModal,
  SearchModal,
  WeddingStoryModal,
  ArcFunctionModal,
  VideoPlayerModal
} from './GlobalModals';
import { WeddingStory, ArcFunction, VideoShort } from '../../data/globalPlannerssData';

interface GlobalPlannerssAppProps {
  onBackToHub?: () => void;
}

export const GlobalPlannerssApp: React.FC<GlobalPlannerssAppProps> = ({ onBackToHub }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedWedding, setSelectedWedding] = useState<WeddingStory | null>(null);
  const [selectedArcFunction, setSelectedArcFunction] = useState<ArcFunction | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoShort | null>(null);
  const [defaultEnquiryDestination, setDefaultEnquiryDestination] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // SEO updates based on activeTab
    const prevTitle = document.title;
    const tabTitles: Record<string, string> = {
      home: 'GLOBAL PLANNERSS | Luxury Wedding Planners & Production Atelier',
      weddings: 'Real Wedding Portfolio | GLOBAL PLANNERSS',
      services: 'Turnkey Planning & Production Services | GLOBAL PLANNERSS',
      destinations: 'Destination Wedding Venues & Guides | GLOBAL PLANNERSS',
      story: 'Our Heritage & Philosophy | GLOBAL PLANNERSS',
      resources: 'Wedding Planning Tools & Budget Estimator | GLOBAL PLANNERSS',
      journal: 'Editorial Journal & Trends | GLOBAL PLANNERSS',
      contact: 'Book a Consultation | GLOBAL PLANNERSS',
      'pricing-planning': 'Turnkey Planning Packages | GLOBAL PLANNERSS',
      'pricing-coordination': 'Day-Of Coordination Packages | GLOBAL PLANNERSS',
    };

    document.title = tabTitles[activeTab] || 'GLOBAL PLANNERSS | Luxury Wedding Planners';

    return () => {
      document.title = prevTitle;
    };
  }, [activeTab]);

  const handleOpenEnquiryWithDestination = (dest: string) => {
    setDefaultEnquiryDestination(dest);
    setEnquiryModalOpen(true);
  };

  const handleSearchResult = (target: string) => {
    if (target.startsWith('decor-')) {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('weddings');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (target === 'calculator' || target === 'resources' || target === 'muhurats' || target === 'checklist') {
      setActiveTab('resources');
    } else if (target === 'weddings') {
      setActiveTab('weddings');
    } else if (target === 'services') {
      setActiveTab('services');
    } else if (target === 'story') {
      setActiveTab('story');
    } else if (target === 'contact') {
      setActiveTab('contact');
    } else if (target.startsWith('venue-')) {
      setActiveTab('destinations');
    } else {
      setActiveTab('home');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-stone-200 font-sans selection:bg-[#C19A4B] selection:text-[#171410]">
      {/* Reference Switcher across catalog */}
      <ReferenceSiteSwitcher currentSiteId="global-plannerss" />

      {/* Luxury Navigation Header */}
      <GlobalNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenEnquiry={() => {
          setDefaultEnquiryDestination('');
          setEnquiryModalOpen(true);
        }}
        onBackToHub={onBackToHub}
      />

      {/* Main View Router */}
      <main>
        {activeTab === 'home' && (
          <>
            <GlobalHero
              onCheckDate={() => setEnquiryModalOpen(true)}
              onViewWeddings={() => setActiveTab('weddings')}
            />
            <GlobalTrustStrip />
            <GlobalValStrip />
            <GlobalWeddingArc onSelectArc={(fn) => setSelectedArcFunction(fn)} />
            <GlobalManifesto />
            <GlobalPortfolioGrid
              onSelectWedding={(w) => setSelectedWedding(w)}
              onViewAll={() => setActiveTab('weddings')}
            />
            <GlobalNumbersSection />
            <GlobalServicesSection onExploreServices={() => setActiveTab('services')} />
            <GlobalMorningTimeline />
            <GlobalDestinationsSection onSelectDestination={(dest) => handleOpenEnquiryWithDestination(dest)} />
            <GlobalPlanningToolsSection />
            <GlobalFounderNote />
            <GlobalVideoRail onPlayVideo={(v) => setSelectedVideo(v)} />
            <GlobalTestimonials />
            <GlobalInstagramFeed />
            <GlobalChannelsSection onBookVideoCall={() => setEnquiryModalOpen(true)} />
          </>
        )}

        {activeTab === 'weddings' && (
          <GlobalWeddingsPage
            onCheckDate={() => setEnquiryModalOpen(true)}
            onSelectWedding={(w) => setSelectedWedding(w)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'story' && (
          <GlobalStoryPage
            onCheckDate={() => setEnquiryModalOpen(true)}
            onSelectWedding={(w) => setSelectedWedding(w)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'services' && (
          <GlobalServicesPage
            onCheckDate={() => setEnquiryModalOpen(true)}
            onSelectWedding={(w) => setSelectedWedding(w)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'destinations' && (
          <GlobalDestinationsPage
            onCheckDate={() => setEnquiryModalOpen(true)}
            onSelectWedding={(w) => setSelectedWedding(w)}
            setActiveTab={setActiveTab}
          />
        )}

        {(activeTab === 'resources' || activeTab === 'planning') && (
          <div className="py-12 bg-[#0D0B0A]">
            <GlobalPlanningToolsSection />
          </div>
        )}

        {activeTab === 'journal' && (
          <GlobalJournalPage
            onCheckDate={() => setEnquiryModalOpen(true)}
            onSelectWedding={(w) => setSelectedWedding(w)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'contact' && (
          <GlobalContactPage
            onCheckDate={() => setEnquiryModalOpen(true)}
            onSelectWedding={(w) => setSelectedWedding(w)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'pricing-planning' && (
          <GlobalPricingPlanningPage
            onCheckDate={() => setEnquiryModalOpen(true)}
            onSelectWedding={(w) => setSelectedWedding(w)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'pricing-coordination' && (
          <div className="py-12 bg-[#0D0B0A]">
            <GlobalPricingPlanningPage
              onCheckDate={() => setEnquiryModalOpen(true)}
              onSelectWedding={(w) => setSelectedWedding(w)}
              setActiveTab={setActiveTab}
            />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="py-12 bg-[#0D0B0A]">
            <GlobalPlanningToolsSection />
          </div>
        )}
      </main>

      {/* Comprehensive Footer */}
      <GlobalFooter
        setActiveTab={setActiveTab}
        onOpenEnquiry={() => setEnquiryModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Floating Direct WhatsApp Action Button */}
      <a
        href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hello%20Global%20Plannerss,%20we%20are%20planning%20our%20wedding%20and%20would%20love%20to%20check%20date%20availability.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-all border border-emerald-400/40"
        title="Chat on WhatsApp with Senior Director"
      >
        <span className="text-base">💬</span>
        <span className="hidden sm:inline">WhatsApp Concierge</span>
      </a>

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultDestination={defaultEnquiryDestination}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectResult={handleSearchResult}
      />

      <WeddingStoryModal
        wedding={selectedWedding}
        onClose={() => setSelectedWedding(null)}
        onPlanSimilar={(w) => {
          setSelectedWedding(null);
          handleOpenEnquiryWithDestination(w.destination);
        }}
      />

      <ArcFunctionModal
        arcFunction={selectedArcFunction}
        onClose={() => setSelectedArcFunction(null)}
        onCheckDate={() => {
          setSelectedArcFunction(null);
          setEnquiryModalOpen(true);
        }}
      />

      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
