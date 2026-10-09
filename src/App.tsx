import React, { useState, Suspense, lazy } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { TrustBadgesRow } from './components/home/TrustBadgesRow';
import { BeforeAfterSlider } from './components/home/BeforeAfterSlider';
import { DemoShowcase } from './components/home/DemoShowcase';
import { ProcessSection } from './components/home/ProcessSection';
import { BenefitsSection } from './components/home/BenefitsSection';
import { TestimonialCarousel } from './components/home/TestimonialCarousel';
import { PricingSection } from './components/home/PricingSection';
import { FAQSection } from './components/home/FAQSection';
import { ContactModal } from './components/home/ContactModal';
import { DiscountPopup } from './components/common/DiscountPopup';
import { CategoryPickerPopup } from './components/common/CategoryPickerPopup';
import { SiteRenderer } from './components/site/SiteRenderer';
import { RealEstatePropertyExplorer } from './components/site/RealEstatePropertyExplorer';

// Marketing Pages
import { DemoWebsitesPage } from './components/pages/DemoWebsitesPage';
import { PricingPage } from './components/pages/PricingPage';
import { CaseStudiesPage } from './components/pages/CaseStudiesPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { BlogPage } from './components/pages/BlogPage';
import { ReferAndEarnPage } from './components/pages/ReferAndEarnPage';
import { FAQPage } from './components/pages/FAQPage';
import { ContactPage } from './components/pages/ContactPage';
import { CitySeoPage } from './components/home/CitySeoPage';

// Shared Loading Fallback for dynamically imported templates and admin tools
const TemplateLoadingFallback = () => (
  <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-6">
    <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4" />
    <p className="text-sm font-medium tracking-wide text-slate-300">Loading website preview...</p>
  </div>
);

const withSuspense = <P extends object>(Component: React.ComponentType<P>) => {
  return function SuspenseWrapped(props: P) {
    return (
      <Suspense fallback={<TemplateLoadingFallback />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

// Lazy loaded views to optimize bundle size and startup memory
const AdminLayout = withSuspense(lazy(() => import('./components/admin/AdminLayout').then(m => ({ default: m.AdminLayout }))));
const MobileWizard = withSuspense(lazy(() => import('./components/wizard/MobileWizard').then(m => ({ default: m.MobileWizard }))));
const MobileEditor = withSuspense(lazy(() => import('./components/editor/MobileEditor').then(m => ({ default: m.MobileEditor }))));
const MobileDashboard = withSuspense(lazy(() => import('./components/dashboard/MobileDashboard').then(m => ({ default: m.MobileDashboard }))));

// Lazy loaded template applications
const SweetCoffeeApp = withSuspense(lazy(() => import('./components/sweetcoffee/SweetCoffeeApp').then(m => ({ default: m.SweetCoffeeApp }))));
const BrewBloomApp = withSuspense(lazy(() => import('./components/brewbloom/BrewBloomApp').then(m => ({ default: m.BrewBloomApp }))));
const TimWendelboeApp = withSuspense(lazy(() => import('./components/timwendelboe/TimWendelboeApp').then(m => ({ default: m.TimWendelboeApp }))));
const OnyxApp = withSuspense(lazy(() => import('./components/onyx/OnyxApp').then(m => ({ default: m.OnyxApp }))));
const CityBrewApp = withSuspense(lazy(() => import('./components/citybrew/CityBrewApp').then(m => ({ default: m.CityBrewApp }))));
const GregorysApp = withSuspense(lazy(() => import('./components/gregorys/GregorysApp').then(m => ({ default: m.GregorysApp }))));
const VeenaWorldApp = withSuspense(lazy(() => import('./components/veenaworld/VeenaWorldApp').then(m => ({ default: m.VeenaWorldApp }))));
const EnrichBeautyApp = withSuspense(lazy(() => import('./components/enrich/EnrichBeautyApp').then(m => ({ default: m.EnrichBeautyApp }))));
const BodycraftApp = withSuspense(lazy(() => import('./components/bodycraft/BodycraftApp').then(m => ({ default: m.BodycraftApp }))));
const HomeSalonApp = withSuspense(lazy(() => import('./components/homesalon/HomeSalonApp').then(m => ({ default: m.HomeSalonApp }))));
const DessangeMumbaiApp = withSuspense(lazy(() => import('./components/dessange/DessangeMumbaiApp').then(m => ({ default: m.DessangeMumbaiApp }))));
const TanishqApp = withSuspense(lazy(() => import('./components/tanishq/TanishqApp').then(m => ({ default: m.TanishqApp }))));
const JewelboxApp = withSuspense(lazy(() => import('./components/jewelbox/JewelboxApp').then(m => ({ default: m.JewelboxApp }))));
const BeautyBerryApp = withSuspense(lazy(() => import('./components/beautyberry/BeautyBerryApp').then(m => ({ default: m.BeautyBerryApp }))));
const GoldsGymApp = withSuspense(lazy(() => import('./components/goldsgym/GoldsGymApp').then(m => ({ default: m.GoldsGymApp }))));
const FitpassApp = withSuspense(lazy(() => import('./components/fitpass/FitpassApp').then(m => ({ default: m.FitpassApp }))));
const KrishnaJewellersApp = withSuspense(lazy(() => import('./components/krishnajewellers/KrishnaJewellersApp').then(m => ({ default: m.KrishnaJewellersApp }))));
const HazoorilalApp = withSuspense(lazy(() => import('./components/hazoorilal/HazoorilalApp').then(m => ({ default: m.HazoorilalApp }))));
const SabkaLoansApp = withSuspense(lazy(() => import('./components/sabkaloans/SabkaLoansApp').then(m => ({ default: m.SabkaLoansApp }))));
const SabkaFinanceApp = withSuspense(lazy(() => import('./components/sabkafinance/SabkaFinanceApp').then(m => ({ default: m.SabkaFinanceApp }))));
const SquareYardDealersApp = withSuspense(lazy(() => import('./components/squareyarddealers/SquareYardDealersApp').then(m => ({ default: m.SquareYardDealersApp }))));
const ChoudharyRealestateApp = withSuspense(lazy(() => import('./components/choudharyrealestate/ChoudharyRealestateApp').then(m => ({ default: m.ChoudharyRealestateApp }))));
const DLCGroupApp = withSuspense(lazy(() => import('./components/dlcgroup/DLCGroupApp').then(m => ({ default: m.DLCGroupApp }))));
const RaozPropertiesApp = withSuspense(lazy(() => import('./components/raozproperties/RaozPropertiesApp').then(m => ({ default: m.RaozPropertiesApp }))));
const RaozBazaarApp = withSuspense(lazy(() => import('./components/raozbazaar/RaozBazaarApp').then(m => ({ default: m.RaozBazaarApp }))));
const RaozWeddingsApp = withSuspense(lazy(() => import('./components/raozweddings/RaozWeddingsApp').then(m => ({ default: m.RaozWeddingsApp }))));
const SMLWWeddingsApp = withSuspense(lazy(() => import('./components/smlwweddings/SMLWWeddingsApp').then(m => ({ default: m.SMLWWeddingsApp }))));
const RathoreWeddingsApp = withSuspense(lazy(() => import('./components/rathoreweddings/RathoreWeddingsApp').then(m => ({ default: m.RathoreWeddingsApp }))));
const AllInOneDestinationWeddingsApp = withSuspense(lazy(() => import('./components/destinationweddings/AllInOneDestinationWeddingsApp').then(m => ({ default: m.AllInOneDestinationWeddingsApp }))));
const LuxeSpaceApp = withSuspense(lazy(() => import('./components/luxespace/LuxeSpaceApp').then(m => ({ default: m.LuxeSpaceApp }))));
const SaveWeb2ZipApp = withSuspense(lazy(() => import('./components/saveweb2zip/SaveWeb2ZipApp').then(m => ({ default: m.SaveWeb2ZipApp }))));
const LawLinksApp = withSuspense(lazy(() => import('./components/lawlinks/LawLinksApp').then(m => ({ default: m.LawLinksApp }))));
const MaheshwariApp = withSuspense(lazy(() => import('./components/maheshwari/MaheshwariApp').then(m => ({ default: m.MaheshwariApp }))));
const RaozMotorsApp = withSuspense(lazy(() => import('./components/raozmotors/RaozMotorsApp').then(m => ({ default: m.RaozMotorsApp }))));
const GroupAchApp = withSuspense(lazy(() => import('./components/groupach/GroupAchApp').then(m => ({ default: m.GroupAchApp }))));
const ClinicByPeopleApp = withSuspense(lazy(() => import('./components/clinicbypeople/ClinicByPeopleApp').then(m => ({ default: m.ClinicByPeopleApp }))));
const MedicarePlusApp = withSuspense(lazy(() => import('./components/medicareplus/MedicarePlusApp').then(m => ({ default: m.MedicarePlusApp }))));
const SkinScieneApp = withSuspense(lazy(() => import('./components/skinsciene/SkinScieneApp').then(m => ({ default: m.SkinScieneApp }))));
const LivintoApp = withSuspense(lazy(() => import('./components/livinto/LivintoApp').then(m => ({ default: m.LivintoApp }))));
const DevdasApp = withSuspense(lazy(() => import('./components/devdas/DevdasApp').then(m => ({ default: m.DevdasApp }))));
const PsrVentureWeddingsApp = withSuspense(lazy(() => import('./components/psrventureweddings/PsrVentureWeddingsApp').then(m => ({ default: m.PsrVentureWeddingsApp }))));
const UtsavLuxeApp = withSuspense(lazy(() => import('./components/utsavluxe/UtsavLuxeApp').then(m => ({ default: m.UtsavLuxeApp }))));
const RaozyWeddingPlannerApp = withSuspense(lazy(() => import('./components/raozyweddingplanner/RaozyWeddingPlannerApp').then(m => ({ default: m.RaozyWeddingPlannerApp }))));
const GlobalPlannerssApp = withSuspense(lazy(() => import('./components/globalplannerss/GlobalPlannerssApp').then(m => ({ default: m.GlobalPlannerssApp }))));
const RaozWeddingHubApp = withSuspense(lazy(() => import('./components/raozweddinghub/RaozWeddingHubApp').then(m => ({ default: m.RaozWeddingHubApp }))));
const Site74App = withSuspense(lazy(() => import('./components/site74/Site74App').then(m => ({ default: m.Site74App }))));
const Site75App = withSuspense(lazy(() => import('./components/site75/Site75App').then(m => ({ default: m.Site75App }))));
const Site76App = withSuspense(lazy(() => import('./components/site76/Site76App').then(m => ({ default: m.Site76App }))));
const Site77App = withSuspense(lazy(() => import('./components/site77/Site77App').then(m => ({ default: m.Site77App }))));
const Site78App = withSuspense(lazy(() => import('./components/site78/Site78App').then(m => ({ default: m.Site78App }))));
const Site79App = withSuspense(lazy(() => import('./components/site79/Site79App').then(m => ({ default: m.Site79App }))));
const Site80App = withSuspense(lazy(() => import('./components/site80/Site80App').then(m => ({ default: m.Site80App }))));
const Site81App = withSuspense(lazy(() => import('./components/site81/Site81App').then(m => ({ default: m.Site81App }))));
const Site82App = withSuspense(lazy(() => import('./components/site82/Site82App').then(m => ({ default: m.Site82App }))));

function AppContent() {
  const {
    activeView,
    activeCitySlug,
    activeSiteSlug,
    setActiveView,
    categoryPickerOpen,
    setCategoryPickerOpen,
    activeEditorSiteId,
    setActiveEditorSiteId
  } = useApp();
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('professional');

  const handleOpenOrder = (pkg: string = 'professional') => {
    setSelectedPackage(pkg);
    setOrderModalOpen(true);
  };

  const handleScrollToDemos = () => {
    const el = document.getElementById('demos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveView('demo-websites');
    }
  };

  // Dedicated Mobile-First Wizard View
  if (activeView === 'wizard') {
    return (
      <MobileWizard
        onCancel={() => setActiveView('home')}
        onComplete={site => {
          setActiveEditorSiteId(site.id);
          setActiveView('dashboard');
        }}
      />
    );
  }

  // Dedicated Mobile-First Editor View
  if (activeView === 'editor') {
    return (
      <MobileEditor
        siteId={activeEditorSiteId}
        onBackToDashboard={() => setActiveView('dashboard')}
      />
    );
  }

  // Dedicated Mobile-First Customer Dashboard View
  if (activeView === 'dashboard') {
    return (
      <MobileDashboard
        onCreateNew={() => setActiveView('wizard')}
        onEditSite={id => {
          setActiveEditorSiteId(id);
          setActiveView('editor');
        }}
        onPreviewSite={site => setActiveView('site', site.slug)}
      />
    );
  }

  // Full Screen Admin Portal Views
  if (activeView === 'admin' || activeView === 'builder') {
    return <AdminLayout />;
  }

  if (activeView === 'site') {
    if (activeSiteSlug === '82-wealth-clinic' || activeSiteSlug === 'wealth-clinic' || activeSiteSlug === 'wealthclinic' || activeSiteSlug === 'wealthnexus' || activeSiteSlug === 'wealth-nexus' || activeSiteSlug === 'site-82-wealth-clinic' || activeSiteSlug === 'site-82') {
      return <Site82App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '81-luxury-real-estate' || activeSiteSlug === 'luxury-real-estate' || activeSiteSlug === '81-real-estate' || activeSiteSlug === 'jamesedition' || activeSiteSlug === 'valtierra' || activeSiteSlug === 'site-81-luxury-real-estate' || activeSiteSlug === 'site-81') {
      return <Site81App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '80-club-bw' || activeSiteSlug === 'club-bw' || activeSiteSlug === 'clubbw' || activeSiteSlug === '80-club' || activeSiteSlug === 'clubnoirblanc' || activeSiteSlug === 'site-80-club-bw' || activeSiteSlug === 'site-80') {
      return <Site80App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '79-elysium-club' || activeSiteSlug === 'elysium-club' || activeSiteSlug === '79-elysium' || activeSiteSlug === 'elysium' || activeSiteSlug === 'privee' || activeSiteSlug === 'privee-delhi' || activeSiteSlug === 'site-79-elysium-club' || activeSiteSlug === 'site-79') {
      return <Site79App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '78-aurelia-resort' || activeSiteSlug === 'aurelia-resort' || activeSiteSlug === '78-aurelia' || activeSiteSlug === 'aurelia' || activeSiteSlug === 'anemos' || activeSiteSlug === 'anemos-goa' || activeSiteSlug === 'anemosgoa' || activeSiteSlug === 'site-78-aurelia-resort') {
      return <Site78App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '77-nocturna-club' || activeSiteSlug === 'nocturna-club' || activeSiteSlug === '77-nocturna' || activeSiteSlug === 'nocturna' || activeSiteSlug === 'hammerzz') {
      return <Site77App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '76-aranya-earth' || activeSiteSlug === 'aranya-earth' || activeSiteSlug === '76-aranya' || activeSiteSlug === 'aranya' || activeSiteSlug === 'craftedknots') {
      return <Site76App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '75-aura-luxe' || activeSiteSlug === 'aura-luxe' || activeSiteSlug === '75-aura' || activeSiteSlug === 'aura' || activeSiteSlug === 'bonevento') {
      return <Site75App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '74-grandeur-weddings' || activeSiteSlug === 'grandeur-weddings' || activeSiteSlug === '74-grandeur' || activeSiteSlug === 'grandeur' || activeSiteSlug === 'marriottindiaweddings') {
      return <Site74App onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '73-raoz-wedding-hub' || activeSiteSlug === 'raoz-wedding-hub' || activeSiteSlug === '73-raoz' || activeSiteSlug === 'raoz-hub' || activeSiteSlug === 'vowsafar') {
      return <RaozWeddingHubApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '72-global-plannerss' || activeSiteSlug === 'global-plannerss' || activeSiteSlug === '72-global' || activeSiteSlug === 'global-planners') {
      return <GlobalPlannerssApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '71-raozy-wedding-planner' || activeSiteSlug === 'raozy-wedding-planner' || activeSiteSlug === '71-raozy' || activeSiteSlug === 'raozy') {
      return <RaozyWeddingPlannerApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '70-psr-venture-weddings' || activeSiteSlug === 'psr-venture-weddings' || activeSiteSlug === '70-psr' || activeSiteSlug === 'psr' || activeSiteSlug === 'psr-weddings') {
      return <PsrVentureWeddingsApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '68-devdas-wedding' || activeSiteSlug === 'devdas-wedding' || activeSiteSlug === '68-devdas' || activeSiteSlug === 'devdas') {
      return <DevdasApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '67-livinto-interiors' || activeSiteSlug === 'livinto-interiors' || activeSiteSlug === '67-livinto' || activeSiteSlug === 'livinto') {
      return <LivintoApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '66-skinsciene-naturals' || activeSiteSlug === 'skinsciene-naturals' || activeSiteSlug === 'skinsciene') {
      return <SkinScieneApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '65-medicareplus-hospital' || activeSiteSlug === 'medicareplus' || activeSiteSlug === 'medicareplus-hospital') {
      return <MedicarePlusApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === '64-clinicbypeople' || activeSiteSlug === 'clinicbypeople') {
      return <ClinicByPeopleApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    if (activeSiteSlug === 'group-ach' || activeSiteSlug === 'group-ach-loan-solutions') {
      return <GroupAchApp onBackToHub={() => setActiveView('demo-websites')} />;
    }
    return <SiteRenderer />;
  }

  if (activeView === 'sweet-coffee') {
    return <SweetCoffeeApp />;
  }

  if (activeView === 'brew-bloom') {
    return <BrewBloomApp />;
  }

  if (activeView === 'tim-wendelboe') {
    return <TimWendelboeApp />;
  }

  if (activeView === 'onyx') {
    return <OnyxApp />;
  }

  if (activeView === 'city-brew') {
    return <CityBrewApp />;
  }

  if (activeView === 'gregorys') {
    return <GregorysApp />;
  }

  if (activeView === 'veena-world') {
    return <VeenaWorldApp />;
  }

  if (activeView === 'enrich') {
    return <EnrichBeautyApp />;
  }

  if (activeView === 'bodycraft') {
    return <BodycraftApp />;
  }

  if (activeView === 'home-salon') {
    return <HomeSalonApp />;
  }

  if (activeView === 'dessange-mumbai') {
    return <DessangeMumbaiApp />;
  }

  if (activeView === 'tanishq') {
    return <TanishqApp />;
  }

  if (activeView === 'jewelbox') {
    return <JewelboxApp />;
  }

  if (activeView === 'beauty-berry') {
    return <BeautyBerryApp />;
  }

  if (activeView === 'golds-gym') {
    return <GoldsGymApp />;
  }

  if (activeView === 'fitpass') {
    return <FitpassApp />;
  }

  if (activeView === 'krishna-jewellers') {
    return <KrishnaJewellersApp />;
  }

  if (activeView === 'hazoorilal-jewellers') {
    return <HazoorilalApp />;
  }

  if (activeView === 'sabka-loans') {
    return <SabkaLoansApp />;
  }

  if (activeView === 'sabka-finance') {
    return <SabkaFinanceApp />;
  }

  if (activeView === 'square-yard-dealers') {
    return <SquareYardDealersApp />;
  }

  if (activeView === 'choudhary-realestate') {
    return <ChoudharyRealestateApp />;
  }

  if (activeView === 'dlc-group') {
    return <DLCGroupApp />;
  }

  if (activeView === 'raoz-properties') {
    return <RaozPropertiesApp />;
  }

  if (activeView === 'raoz-bazaar') {
    return <RaozBazaarApp />;
  }

  if (activeView === 'raoz-weddings') {
    return <RaozWeddingsApp />;
  }

  if (activeView === 'smlwindia') {
    return <SMLWWeddingsApp />;
  }

  if (activeView === 'rathore-weddings') {
    return <RathoreWeddingsApp />;
  }

  if (activeView === 'all-in-one-destination-weddings') {
    return <AllInOneDestinationWeddingsApp />;
  }

  if (activeView === 'luxespace-htx') {
    return <LuxeSpaceApp />;
  }

  if (activeView === 'saveweb2zip') {
    return <SaveWeb2ZipApp />;
  }

  if (activeView === 'lawlinks') {
    return <LawLinksApp />;
  }

  if (activeView === 'maheshwari') {
    return <MaheshwariApp onBackToHub={() => setActiveView('home')} />;
  }

  if (activeView === 'group-ach') {
    return <GroupAchApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'clinicbypeople') {
    return <ClinicByPeopleApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-82-wealth-clinic' || activeView === '82-wealth-clinic' || activeView === 'wealth-clinic' || activeView === 'wealthnexus' || activeView === 'wealth-nexus') {
    return <Site82App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-81-luxury-real-estate' || activeView === '81-luxury-real-estate' || activeView === 'valtierra' || activeView === 'jamesedition') {
    return <Site81App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-80-club-bw' || activeView === '80-club-bw' || activeView === 'club-bw' || activeView === 'clubbw') {
    return <Site80App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-79-elysium-club' || activeView === '79-elysium-club') {
    return <Site79App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-78-aurelia-resort' || activeView === '78-aurelia-resort') {
    return <Site78App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-77-nocturna-club' || activeView === '77-nocturna-club') {
    return <Site77App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-76-aranya-earth' || activeView === '76-aranya-earth') {
    return <Site76App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'site-75-aura-luxe' || activeView === '75-aura-luxe') {
    return <Site75App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'grandeur-weddings' || activeView === '74-grandeur-weddings') {
    return <Site74App onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'raoz-wedding-hub' || activeView === '73-raoz-wedding-hub') {
    return <RaozWeddingHubApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'global-plannerss' || activeView === '72-global-plannerss') {
    return <GlobalPlannerssApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'raozy-wedding-planner' || activeView === '71-raozy-wedding-planner') {
    return <RaozyWeddingPlannerApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'psr-venture-weddings' || activeView === '70-psr-venture-weddings') {
    return <PsrVentureWeddingsApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'utsav-luxe' || activeView === '69-utsav-luxe') {
    return <UtsavLuxeApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'devdas-wedding') {
    return <DevdasApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'livinto-interiors') {
    return <LivintoApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'skinsciene-naturals') {
    return <SkinScieneApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'medicareplus') {
    return <MedicarePlusApp onBackToHub={() => setActiveView('demo-websites')} />;
  }

  if (activeView === 'raoz-motors') {
    return <RaozMotorsApp />;
  }

  const renderPublicShell = (content: React.ReactNode, isHome = false) => (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Inter'] selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onOpenOrderModal={() => handleOpenOrder('professional')} />
      <main className="flex-1">{content}</main>
      <Footer onOpenOrderModal={() => handleOpenOrder('professional')} />
      <ContactModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        defaultPackage={selectedPackage}
      />
      {/* "What's Your Business?" Category-Picker Popup (Requirement 8) */}
      <CategoryPickerPopup
        isOpen={categoryPickerOpen}
        onClose={() => setCategoryPickerOpen(false)}
      />
      {/* 15% Instant Discount Session Popup on homepage (Requirement 5) */}
      {isHome && <DiscountPopup />}
    </div>
  );

  // Real Estate Property Explorer (Standalone / Deep link)
  if (activeView === 'properties') {
    return renderPublicShell(
      <RealEstatePropertyExplorer onBackToSite={() => setActiveView('home')} />
    );
  }

  // Marketing Page Views
  if (activeView === 'demo-websites') {
    return renderPublicShell(
      <DemoWebsitesPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'pricing') {
    return renderPublicShell(
      <PricingPage onOpenOrderModal={(plan) => handleOpenOrder(plan || 'professional')} />
    );
  }

  if (activeView === 'case-studies') {
    return renderPublicShell(
      <CaseStudiesPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'testimonials') {
    return renderPublicShell(
      <TestimonialsPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'blog') {
    return renderPublicShell(
      <BlogPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'refer-and-earn') {
    return renderPublicShell(<ReferAndEarnPage />);
  }

  if (activeView === 'faq') {
    return renderPublicShell(
      <FAQPage onOpenOrderModal={() => handleOpenOrder('professional')} />
    );
  }

  if (activeView === 'contact') {
    return renderPublicShell(<ContactPage />);
  }

  if (activeView === 'city') {
    return renderPublicShell(
      <CitySeoPage
        citySlug={activeCitySlug}
        onOpenOrderModal={() => handleOpenOrder('professional')}
        onSelectCity={(slug) => setActiveView('city', slug)}
      />
    );
  }

  // Home Page View
  return renderPublicShell(
    <>
      <HeroSection
        onOpenOrderModal={() => handleOpenOrder('professional')}
        onExploreDemos={handleScrollToDemos}
      />
      {/* Dynamic Trust Badges row pulling counts from websites */}
      <TrustBadgesRow />
      {/* Before / After Interactive Visual Slider */}
      <BeforeAfterSlider />
      {/* Demo Showcase with horizontally scrollable category chips */}
      <DemoShowcase />
      <ProcessSection onOpenOrderModal={() => handleOpenOrder('professional')} />
      <BenefitsSection />
      {/* Auto-scrolling swipeable testimonial carousel */}
      <TestimonialCarousel />
      <PricingSection onOpenOrderModal={() => handleOpenOrder('professional')} />
      <FAQSection onOpenOrderModal={() => handleOpenOrder('professional')} />
    </>,
    true
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}
