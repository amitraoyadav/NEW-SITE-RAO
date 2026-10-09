import React, { useState, useEffect } from 'react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';
import { RaozNavbar } from './RaozNavbar';
import { RaozHero } from './RaozHero';
import { RaozThesis } from './RaozThesis';
import { RaozExperienceCards } from './RaozExperienceCards';
import { RaozHereAfarSection } from './RaozHereAfarSection';
import {
  CouplesDestinationPage,
  CouplesLocalPage,
  ForGuestsPage,
  ForPlannersPage,
  DestinationGuidesPage,
  PricingPage,
  FAQPage,
  AboutPage,
  ContactPage,
  PartnerAgreementPage,
  LegalPage
} from './RaozPages';
import {
  CheckoutModal,
  LoginModal,
  GuestRSVPModal
} from './RaozModals';
import { RaozFooter } from './RaozFooter';
import { DestinationGuide } from '../../data/raozWeddingHubData';

interface RaozWeddingHubAppProps {
  onBackToHub?: () => void;
}

export const RaozWeddingHubApp: React.FC<RaozWeddingHubAppProps> = ({ onBackToHub }) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currency, setCurrency] = useState<string>('AUD');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'couple' | 'planner-studio' | 'planner-agency'>('couple');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [guestRSVPModalOpen, setGuestRSVPModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<DestinationGuide | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic SEO titles
    const prevTitle = document.title;
    const tabTitles: Record<string, string> = {
      home: 'Raoz Wedding Hub | Destination Wedding Planning Platform · One Calm Place',
      'couples-destination': 'Raoz Afar · Multi-Day Destination Wedding Planning | Raoz Wedding Hub',
      'couples-local': 'Raoz Here · Local Single-Day Wedding Planning | Raoz Wedding Hub',
      'for-guests': 'The Guest Hub Experience · 8 Languages | Raoz Wedding Hub',
      'for-planners': 'For Wedding Planners & Agencies · Multi-Wedding Suite | Raoz Wedding Hub',
      guides: 'Destination Guides & Venue Intelligence | Raoz Wedding Hub',
      pricing: 'Couples & Planners Pricing · One-Time Clear Fees | Raoz Wedding Hub',
      'pricing-planners': 'Planner Partner Pricing · Atelier & Agency | Raoz Wedding Hub',
      faq: 'Frequently Asked Questions | Raoz Wedding Hub',
      about: 'Our Story & Calm Planning Philosophy | Raoz Wedding Hub',
      contact: 'Contact Raoz Concierge | Raoz Wedding Hub',
      'partner-agreement': 'Planner Partner Terms & Agreement | Raoz Wedding Hub',
      privacy: 'Privacy Policy | Raoz Wedding Hub',
      terms: 'Terms of Service | Raoz Wedding Hub'
    };

    document.title = tabTitles[activeTab] || 'Raoz Wedding Hub | Destination Wedding Planning Platform';

    return () => {
      document.title = prevTitle;
    };
  }, [activeTab]);

  const handleStartPlanning = (plan: 'couple' | 'planner-studio' | 'planner-agency' = 'couple') => {
    setCheckoutPlan(plan);
    setCheckoutModalOpen(true);
  };

  const handleRoleSelection = (role: 'couple' | 'guest' | 'planner') => {
    if (role === 'couple') {
      setActiveTab('couples-destination');
    } else if (role === 'guest') {
      setActiveTab('for-guests');
    } else if (role === 'planner') {
      setActiveTab('for-planners');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1B16] font-sans selection:bg-[#A85C3D] selection:text-white">
      {/* Reference Switcher across catalog */}
      <ReferenceSiteSwitcher currentSiteId="raoz-wedding-hub" />

      {/* Top Navbar */}
      <RaozNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCurrency={currency}
        setSelectedCurrency={setCurrency}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenStartPlanning={() => handleStartPlanning('couple')}
      />

      {/* Main Content Router */}
      <main>
        {activeTab === 'home' && (
          <>
            <RaozHero
              onSeeExperience={() => {
                const el = document.getElementById('see-the-experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('couples-destination');
              }}
              onStartPlanning={() => handleStartPlanning('couple')}
              onExploreDemo={() => setActiveTab('couples-destination')}
            />
            <RaozThesis />
            <RaozExperienceCards
              onSelectTab={setActiveTab}
              currency={currency}
            />
            <RaozHereAfarSection
              onSelectLocal={() => setActiveTab('couples-local')}
              onSelectDestination={() => setActiveTab('couples-destination')}
            />
            {/* Ready to make it real bottom prompt */}
            <section className="px-6 pt-12 pb-16 bg-[#FAF8F5] text-center border-t border-[#E8DFD3]">
              <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="font-serif font-medium text-3xl sm:text-4xl text-[#1F1B16]">
                  Ready to make it real?
                </h2>
                <p className="text-sm sm:text-base text-[#6B6155]">
                  One price, everything included. No subscriptions, no ads, no vendor pressure.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => handleStartPlanning('couple')}
                    className="px-6 py-3 rounded-full bg-[#4A5847] hover:bg-[#394437] text-white text-xs font-semibold shadow-xs"
                  >
                    Start Planning Free →
                  </button>
                  <button
                    onClick={() => setActiveTab('couples-destination')}
                    className="px-6 py-3 rounded-full border border-[#D5C9B8] hover:border-[#1F1B16] text-[#1F1B16] text-xs font-semibold bg-white"
                  >
                    Explore Dashboard Details
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'couples-destination' && (
          <CouplesDestinationPage
            onStartPlanning={() => handleStartPlanning('couple')}
            currency={currency}
          />
        )}

        {activeTab === 'couples-local' && (
          <CouplesLocalPage
            onStartPlanning={() => handleStartPlanning('couple')}
            currency={currency}
          />
        )}

        {activeTab === 'for-guests' && (
          <ForGuestsPage
            onOpenRSVP={() => setGuestRSVPModalOpen(true)}
          />
        )}

        {activeTab === 'for-planners' && (
          <ForPlannersPage
            onStartPlanning={() => handleStartPlanning('planner-studio')}
            onOpenPartnerModal={() => setLoginModalOpen(true)}
          />
        )}

        {activeTab === 'guides' && (
          <DestinationGuidesPage
            onSelectGuide={guide => {
              setSelectedGuide(guide);
              setActiveTab('contact');
            }}
          />
        )}

        {(activeTab === 'pricing' || activeTab === 'pricing-planners') && (
          <PricingPage
            onOpenCheckout={handleStartPlanning}
            currency={currency}
          />
        )}

        {activeTab === 'faq' && <FAQPage />}

        {activeTab === 'about' && <AboutPage />}

        {activeTab === 'contact' && <ContactPage />}

        {activeTab === 'partner-agreement' && <PartnerAgreementPage />}

        {activeTab === 'privacy' && <LegalPage type="privacy" />}

        {activeTab === 'terms' && <LegalPage type="terms" />}
      </main>

      {/* Global Luxury Footer */}
      <RaozFooter
        setActiveTab={setActiveTab}
        onBackToHub={onBackToHub}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        currency={currency}
        planType={checkoutPlan}
        onSuccess={() => {
          setActiveTab('couples-destination');
        }}
      />

      {/* Login & Demo Switcher Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSelectRole={handleRoleSelection}
      />

      {/* Guest RSVP Modal */}
      <GuestRSVPModal
        isOpen={guestRSVPModalOpen}
        onClose={() => setGuestRSVPModalOpen(false)}
      />
    </div>
  );
};

export default RaozWeddingHubApp;
