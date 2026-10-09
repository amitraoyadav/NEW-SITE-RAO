import React, { useState, useEffect } from 'react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { site74Config } from '../../config/site74Config';
import { Site74Navbar } from './Site74Navbar';
import { Site74Hero } from './Site74Hero';
import { Site74DestinationDiscovery } from './Site74DestinationDiscovery';
import { Site74Experiences } from './Site74Experiences';
import { Site74Services } from './Site74Services';
import { Site74Offers } from './Site74Offers';
import { Site74Gallery } from './Site74Gallery';
import { Site74Honeymoon } from './Site74Honeymoon';
import { Site74PlanningForm } from './Site74PlanningForm';
import { CallbackModal, DestinationDetailModal } from './Site74Modals';
import { Site74Footer } from './Site74Footer';
import {
  DestinationsDirectoryPage,
  OffersDirectoryPage,
  HoneymoonDirectoryPage,
  ContactConciergePage,
  LegalDocumentPage
} from './Site74Pages';
import { DestinationItem, OfferItem, FAQS_SITE74, DESTINATIONS_DATA } from '../../data/site74Data';

interface Site74AppProps {
  onBackToHub?: () => void;
}

export const Site74App: React.FC<Site74AppProps> = ({ onBackToHub }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<OfferItem | null>(null);
  const [planningInitialDest, setPlanningInitialDest] = useState<string>('Jaipur');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // SEO & Schema.org sync
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const prevTitle = document.title;
    const titles: Record<string, string> = {
      home: 'Grandeur Weddings & Resorts | Luxury Palaces, Beachfronts & Ballrooms',
      destinations: 'Destination Weddings in India & Worldwide | Grandeur Weddings',
      services: 'Bespoke Wedding Planning & Banqueting Services | Grandeur Weddings',
      gallery: 'Luxury Wedding Inspiration Gallery & Mandap Designs | Grandeur Weddings',
      offers: 'Exclusive Wedding Packages & Privileges | Grandeur Weddings',
      honeymoon: 'Honeymoon Sanctuaries & Romance Escapes | Grandeur Weddings',
      contact: 'Contact Wedding Concierge & Direct Hotline | Grandeur Weddings',
      planning: 'Start Planning Your Luxury Wedding | Grandeur Weddings',
      terms: 'Terms & Conditions of Hospitality | Grandeur Weddings',
      privacy: 'Privacy Policy & Guest Data Protection | Grandeur Weddings',
      accessibility: 'Accessibility Statement | Grandeur Weddings',
      sitemap: 'Directory & Sitemap | Grandeur Weddings'
    };

    document.title = titles[activeTab] || 'Grandeur Weddings & Resorts | Luxury Celebrations';

    return () => {
      document.title = prevTitle;
    };
  }, [activeTab]);

  const handleOpenPlanningForDest = (destName: string) => {
    setPlanningInitialDest(destName);
    setActiveTab('planning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOffer = (offer: OfferItem) => {
    setSelectedOffer(offer);
    setPlanningInitialDest(offer.destination.split('&')[0].trim());
    setActiveTab('planning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141210] font-sans selection:bg-[#C5A059] selection:text-[#141210]">
      {/* Reference Switcher across catalog */}
      <ReferenceSiteSwitcher currentSiteId="grandeur-weddings" />

      {/* Main Luxury Header */}
      <Site74Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCallback={() => setCallbackModalOpen(true)}
        onOpenPlanning={() => {
          const el = document.getElementById('planning-form-section');
          if (activeTab === 'home' && el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            setActiveTab('planning');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onSelectDestination={destSlug => {
          const found = DESTINATIONS_DATA.find(d => d.slug === destSlug);
          if (found) {
            setSelectedDestination(found);
          }
        }}
      />

      {/* MAIN VIEW CONTENT ROUTER */}
      <main>
        {activeTab === 'home' && (
          <>
            {/* Fullscreen Hero */}
            <Site74Hero
              onStartPlanning={() => {
                const el = document.getElementById('planning-form-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('planning');
              }}
              onExploreDestinations={() => {
                const el = document.getElementById('destinations-discovery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('destinations');
              }}
            />

            {/* Destination Discovery */}
            <Site74DestinationDiscovery
              onSelectDestination={dest => setSelectedDestination(dest)}
              onExploreAll={() => setActiveTab('destinations')}
            />

            {/* Wedding Experiences Showcase */}
            <Site74Experiences
              onSelectCategory={cat => {
                setActiveTab('destinations');
              }}
            />

            {/* Signature Hospitality Services */}
            <Site74Services
              onOpenPlanning={() => setActiveTab('planning')}
            />

            {/* Curated Wedding Offers */}
            <Site74Offers
              onSelectOffer={handleSelectOffer}
            />

            {/* Inspiration Gallery Grid with Lightbox */}
            <Site74Gallery />

            {/* Honeymoon Retreats */}
            <Site74Honeymoon
              onOpenPlanning={() => setActiveTab('planning')}
            />

            {/* Multi-Step Start Planning Experience */}
            <Site74PlanningForm
              initialDestination={planningInitialDest}
              onSuccess={() => {}}
            />

            {/* FAQs Accordion on Homepage */}
            <section className="py-20 px-5 sm:px-6 bg-white border-t border-[#E8E1D5]">
              <div className="max-w-4xl mx-auto space-y-10">
                <div className="text-center space-y-2">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#8C6D37]">
                    Planning Intelligence
                  </span>
                  <h2 className="font-serif font-medium text-3xl sm:text-4xl text-[#141210]">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B6155]">
                    Everything you need to know about planning an unforgettable celebration with Grandeur.
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS_SITE74.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-[#E8E1D5] bg-[#FAF8F5]/60 overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-medium text-base text-[#141210] cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <span className={`text-[#8C6D37] font-mono text-sm transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                            →
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-xs text-[#52483E] leading-relaxed border-t border-[#F0EAE1] pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        {/* STANDALONE PAGES */}
        {activeTab === 'destinations' && (
          <DestinationsDirectoryPage
            onSelectDestination={dest => setSelectedDestination(dest)}
            onOpenPlanning={() => setActiveTab('planning')}
          />
        )}

        {activeTab === 'services' && (
          <Site74Services
            onOpenPlanning={() => setActiveTab('planning')}
          />
        )}

        {activeTab === 'gallery' && (
          <Site74Gallery />
        )}

        {activeTab === 'offers' && (
          <OffersDirectoryPage
            onSelectOffer={handleSelectOffer}
          />
        )}

        {activeTab === 'honeymoon' && (
          <HoneymoonDirectoryPage
            onOpenPlanning={() => setActiveTab('planning')}
          />
        )}

        {activeTab === 'contact' && (
          <ContactConciergePage
            onOpenCallback={() => setCallbackModalOpen(true)}
          />
        )}

        {activeTab === 'planning' && (
          <div className="pt-6">
            <Site74PlanningForm
              initialDestination={planningInitialDest}
              onSuccess={() => {}}
            />
          </div>
        )}

        {activeTab === 'terms' && <LegalDocumentPage type="terms" />}
        {activeTab === 'privacy' && <LegalDocumentPage type="privacy" />}
        {activeTab === 'accessibility' && <LegalDocumentPage type="accessibility" />}
        {activeTab === 'sitemap' && <LegalDocumentPage type="sitemap" />}
      </main>

      {/* Global Luxury Footer */}
      <Site74Footer
        setActiveTab={setActiveTab}
        onBackToHub={onBackToHub}
        onOpenCallback={() => setCallbackModalOpen(true)}
        onOpenPlanning={() => {
          setActiveTab('planning');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Callback Request Modal */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />

      {/* Destination Detailed Property View Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanForDestination={handleOpenPlanningForDest}
      />
    </div>
  );
};

export default Site74App;
