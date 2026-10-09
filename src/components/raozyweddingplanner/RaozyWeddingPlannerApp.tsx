import React, { useState, useEffect } from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';
import { RAOZY_CONFIG, RAOZY_SERVICES, LookbookItem, RaozyService, RealWeddingStory, DestinationHub } from '../../data/raozyWeddingData';
import { RaozyNavbar } from './RaozyNavbar';
import { RaozyHero } from './RaozyHero';
import { RaozyPhilosophyBanner } from './RaozyPhilosophyBanner';
import { RaozyServicesSection } from './RaozyServicesSection';
import { RaozyPortfolioSection } from './RaozyPortfolioSection';
import { RaozyAtelierSection } from './RaozyAtelierSection';
import { RaozyBudgetCalculator } from './RaozyBudgetCalculator';
import { RaozyRealWeddingsSection } from './RaozyRealWeddingsSection';
import { RaozyDestinationsSection } from './RaozyDestinationsSection';
import { RaozyReviewsSection } from './RaozyReviewsSection';
import { RaozyFaqSection } from './RaozyFaqSection';
import { RaozyContactSection } from './RaozyContactSection';
import { RaozyFooter } from './RaozyFooter';
import { RaozyConsultationModal } from './RaozyConsultationModal';
import { RaozyLookbookLightboxModal } from './RaozyLookbookLightboxModal';
import { RaozyServiceDetailModal } from './RaozyServiceDetailModal';

interface RaozyWeddingPlannerAppProps {
  onBackToHub?: () => void;
}

export const RaozyWeddingPlannerApp: React.FC<RaozyWeddingPlannerAppProps> = ({ onBackToHub }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);
  const [selectedLookbookItem, setSelectedLookbookItem] = useState<LookbookItem | null>(null);
  const [selectedService, setSelectedService] = useState<RaozyService | null>(null);
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');
  const [initialDestination, setInitialDestination] = useState<string>('delhi');

  // Sync HTML title & meta tags for SEO
  useEffect(() => {
    document.title = `${raozyConfig.SITE_NAME} | ${raozyConfig.TAGLINE}`;
  }, []);

  const handleOpenConsultationWithNotes = (notes: string, destination?: string) => {
    setPrefilledNotes(notes);
    if (destination) setInitialDestination(destination);
    setConsultationModalOpen(true);
  };

  const handleBookLook = (item: LookbookItem) => {
    handleOpenConsultationWithNotes(
      `Interested in booking the "${item.title}" design concept for ${item.destination}.`,
      item.destination.toLowerCase().includes('udaipur')
        ? 'udaipur'
        : item.destination.toLowerCase().includes('jaipur')
        ? 'jaipur'
        : item.destination.toLowerCase().includes('goa')
        ? 'goa'
        : 'delhi'
    );
  };

  const handleBookService = (service: RaozyService) => {
    handleOpenConsultationWithNotes(`Interested in inquiring about service: ${service.title}.`);
  };

  const handlePlanSimilarWedding = (story: RealWeddingStory) => {
    handleOpenConsultationWithNotes(
      `Inspired by ${story.coupleNames}'s celebration at ${story.venue} (${story.destination}). Looking to plan a similar celebration.`,
      story.destination.toLowerCase().includes('udaipur')
        ? 'udaipur'
        : story.destination.toLowerCase().includes('goa')
        ? 'goa'
        : 'delhi'
    );
  };

  const handleSelectDestination = (dest: DestinationHub) => {
    handleOpenConsultationWithNotes(
      `Exploring wedding venues in ${dest.name}. Please share the vetted venue shortlist and buyout tariffs.`,
      dest.id.replace('dest-', '')
    );
  };

  const handleBookFromCalculator = (quoteData: any) => {
    handleOpenConsultationWithNotes(
      `Generated Budget Quote: ${quoteData.totalEstimate} for ${quoteData.guestCount} guests in ${quoteData.destination} (${quoteData.durationDays} days, ${quoteData.decorTier} tier).`,
      quoteData.destination.toLowerCase().includes('udaipur')
        ? 'udaipur'
        : quoteData.destination.toLowerCase().includes('jaipur')
        ? 'jaipur'
        : quoteData.destination.toLowerCase().includes('goa')
        ? 'goa'
        : 'delhi'
    );
  };

  return (
    <div className="min-h-screen bg-[#0E0C0B] text-stone-100 font-sans selection:bg-[#DFC082] selection:text-[#171410]">
      {/* Main Luxury Header */}
      <RaozyNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
        onBackToHub={onBackToHub}
      />

      {/* Main Page Rendering */}
      <main>
        {activeTab === 'home' && (
          <>
            <RaozyHero
              onOpenConsultationModal={() => setConsultationModalOpen(true)}
              onExplorePortfolio={() => {
                setActiveTab('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenCalculator={() => {
                setActiveTab('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenAtelier={() => {
                setActiveTab('atelier');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <RaozyPhilosophyBanner />
            <RaozyServicesSection
              onSelectService={(srv) => setSelectedService(srv)}
              onOpenConsultationModal={() => setConsultationModalOpen(true)}
            />
            <RaozyPortfolioSection
              onSelectItem={(item) => setSelectedLookbookItem(item)}
              onBookLook={handleBookLook}
            />
            <RaozyAtelierSection />
            <RaozyDestinationsSection
              onSelectDestination={handleSelectDestination}
              onOpenConsultationModal={() => setConsultationModalOpen(true)}
            />
            <RaozyBudgetCalculator onBookConsultation={handleBookFromCalculator} />
            <RaozyRealWeddingsSection
              onPlanSimilar={handlePlanSimilarWedding}
              onOpenConsultationModal={() => setConsultationModalOpen(true)}
            />
            <RaozyReviewsSection />
            <RaozyFaqSection />
            <RaozyContactSection />
          </>
        )}

        {activeTab === 'portfolio' && (
          <div className="pt-8">
            <RaozyPortfolioSection
              onSelectItem={(item) => setSelectedLookbookItem(item)}
              onBookLook={handleBookLook}
            />
            <RaozyAtelierSection />
            <RaozyContactSection />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-8">
            <RaozyServicesSection
              onSelectService={(srv) => setSelectedService(srv)}
              onOpenConsultationModal={() => setConsultationModalOpen(true)}
            />
            <RaozyPhilosophyBanner />
            <RaozyContactSection />
          </div>
        )}

        {activeTab === 'destinations' && (
          <div className="pt-8">
            <RaozyDestinationsSection
              onSelectDestination={handleSelectDestination}
              onOpenConsultationModal={() => setConsultationModalOpen(true)}
            />
            <RaozyBudgetCalculator onBookConsultation={handleBookFromCalculator} />
            <RaozyContactSection />
          </div>
        )}

        {activeTab === 'atelier' && (
          <div className="pt-8">
            <RaozyAtelierSection />
            <RaozyPhilosophyBanner />
            <RaozyPortfolioSection
              onSelectItem={(item) => setSelectedLookbookItem(item)}
              onBookLook={handleBookLook}
            />
            <RaozyContactSection />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="pt-8">
            <RaozyBudgetCalculator onBookConsultation={handleBookFromCalculator} />
            <RaozyPhilosophyBanner />
            <RaozyContactSection />
          </div>
        )}

        {activeTab === 'real-weddings' && (
          <div className="pt-8">
            <RaozyRealWeddingsSection
              onPlanSimilar={handlePlanSimilarWedding}
              onOpenConsultationModal={() => setConsultationModalOpen(true)}
            />
            <RaozyReviewsSection />
            <RaozyContactSection />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-8">
            <RaozyPhilosophyBanner />
            <RaozyAtelierSection />
            <RaozyReviewsSection />
            <RaozyContactSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-8">
            <RaozyContactSection />
            <RaozyFaqSection />
          </div>
        )}
      </main>

      {/* Luxury Footer */}
      <RaozyFooter
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
        onOpenCalculator={() => {
          setActiveTab('calculator');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${raozyConfig.WHATSAPP_NUMBER}?text=Hello%20Raozy%20Wedding%20Planner,%20I%20would%20like%20to%20inquire%20about%20date%20availability.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Concierge"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
          </svg>
          <span className="hidden sm:inline text-xs font-serif font-semibold tracking-wider uppercase">
            WhatsApp VIP Concierge
          </span>
        </a>
      </div>

      {/* Interactive Modals */}
      <RaozyConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        prefilledNotes={prefilledNotes}
        initialDestination={initialDestination}
      />

      <RaozyLookbookLightboxModal
        item={selectedLookbookItem}
        onClose={() => setSelectedLookbookItem(null)}
        onBookLook={handleBookLook}
      />

      <RaozyServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookService}
      />
    </div>
  );
};
