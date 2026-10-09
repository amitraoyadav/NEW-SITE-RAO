import React, { useState, useEffect } from 'react';
import { useApp, normalizeBusinessSite } from '../../context/AppContext';
import { BusinessWebsite, ItemOrService } from '../../types';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  QrCode,
  Share2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  Mail,
  Instagram,
  Facebook,
  Download,
  Utensils,
  Plus
} from 'lucide-react';
import { QRCodeModal } from '../common/QRCodeModal';
import { SiteTagTable } from '../common/SiteTagTable';
import { CategoryBookingEngine } from './CategoryBookingEngine';
import { RealEstatePropertyExplorer } from './RealEstatePropertyExplorer';
import { getCategoryToken } from '../../data/categoryDesignTokens';
import { getCategoryReferences, ReferenceSite } from '../../data/categories130Data';
import { getReferenceRegistryItemById } from '../../data/referenceDesignRegistry';
import { DynamicSectionEngine } from './DynamicSectionEngine';
import { DynamicSectionDefinition } from '../../types/referenceDesign';
const TemplateLoadingFallback = () => (
  <div className="min-h-[400px] bg-slate-900 flex flex-col items-center justify-center text-white p-6">
    <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4" />
    <p className="text-sm font-medium tracking-wide text-slate-300">Loading website preview...</p>
  </div>
);

const withSuspense = <P extends object>(Component: React.ComponentType<P>) => {
  return function SuspenseWrapped(props: P) {
    return (
      <React.Suspense fallback={<TemplateLoadingFallback />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};

const SweetCoffeeApp = withSuspense(React.lazy(() => import('../sweetcoffee/SweetCoffeeApp').then(m => ({ default: m.SweetCoffeeApp }))));
const BrewBloomApp = withSuspense(React.lazy(() => import('../brewbloom/BrewBloomApp').then(m => ({ default: m.BrewBloomApp }))));
const TimWendelboeApp = withSuspense(React.lazy(() => import('../timwendelboe/TimWendelboeApp').then(m => ({ default: m.TimWendelboeApp }))));
const OnyxApp = withSuspense(React.lazy(() => import('../onyx/OnyxApp').then(m => ({ default: m.OnyxApp }))));
const CityBrewApp = withSuspense(React.lazy(() => import('../citybrew/CityBrewApp').then(m => ({ default: m.CityBrewApp }))));
const GregorysApp = withSuspense(React.lazy(() => import('../gregorys/GregorysApp').then(m => ({ default: m.GregorysApp }))));
const TwoDCafeApp = withSuspense(React.lazy(() => import('../twodcafe/TwoDCafeApp').then(m => ({ default: m.TwoDCafeApp }))));
const BlueTokaiApp = withSuspense(React.lazy(() => import('../bluetokai/BlueTokaiApp').then(m => ({ default: m.BlueTokaiApp }))));
const ThirdWaveApp = withSuspense(React.lazy(() => import('../thirdwave/ThirdWaveApp').then(m => ({ default: m.ThirdWaveApp }))));
const CafeCoffeeDayApp = withSuspense(React.lazy(() => import('../ccd/CafeCoffeeDayApp').then(m => ({ default: m.CafeCoffeeDayApp }))));
const RubysApp = withSuspense(React.lazy(() => import('../rubys/RubysApp').then(m => ({ default: m.RubysApp }))));
const BrewedApp = withSuspense(React.lazy(() => import('../brewed/BrewedApp').then(m => ({ default: m.BrewedApp }))));
const GreenberrysApp = withSuspense(React.lazy(() => import('../greenberrys/GreenberrysApp').then(m => ({ default: m.GreenberrysApp }))));
const MeanMugApp = withSuspense(React.lazy(() => import('../meanmug/MeanMugApp').then(m => ({ default: m.MeanMugApp }))));
const RevivalCafeApp = withSuspense(React.lazy(() => import('../revival/RevivalCafeApp').then(m => ({ default: m.RevivalCafeApp }))));
const AmericanProvisionsApp = withSuspense(React.lazy(() => import('../americanprovisions/AmericanProvisionsApp').then(m => ({ default: m.AmericanProvisionsApp }))));
const MojoCoffeeApp = withSuspense(React.lazy(() => import('../mojocoffee/MojoCoffeeApp').then(m => ({ default: m.MojoCoffeeApp }))));
const SweetwatersApp = withSuspense(React.lazy(() => import('../sweetwaters/SweetwatersApp').then(m => ({ default: m.SweetwatersApp }))));
const BenneApp = withSuspense(React.lazy(() => import('../benne/BenneApp').then(m => ({ default: m.BenneApp }))));
const BarbequeNationApp = withSuspense(React.lazy(() => import('../barbequenation/BarbequeNationApp').then(m => ({ default: m.BarbequeNationApp }))));
const NandosApp = withSuspense(React.lazy(() => import('../nandos/NandosApp').then(m => ({ default: m.NandosApp }))));
const MainlandChinaApp = withSuspense(React.lazy(() => import('../mainlandchina/MainlandChinaApp').then(m => ({ default: m.MainlandChinaApp }))));
const OhCalcuttaApp = withSuspense(React.lazy(() => import('../ohcalcutta/OhCalcuttaApp').then(m => ({ default: m.OhCalcuttaApp }))));
const PunjabGrillApp = withSuspense(React.lazy(() => import('../punjabgrill/PunjabGrillApp').then(m => ({ default: m.PunjabGrillApp }))));
const BikanervalaApp = withSuspense(React.lazy(() => import('../bikanervala/BikanervalaApp').then(m => ({ default: m.BikanervalaApp }))));
const SagarRatnaApp = withSuspense(React.lazy(() => import('../sagarratna/SagarRatnaApp').then(m => ({ default: m.SagarRatnaApp }))));
const KarimsApp = withSuspense(React.lazy(() => import('../karims/KarimsApp').then(m => ({ default: m.KarimsApp }))));
const AlBaikApp = withSuspense(React.lazy(() => import('../albaik/AlBaikApp').then(m => ({ default: m.AlBaikApp }))));
const MrIdliApp = withSuspense(React.lazy(() => import('../mridli/MrIdliApp').then(m => ({ default: m.MrIdliApp }))));
const DreamToTravelsApp = withSuspense(React.lazy(() => import('../dreamtotravels/DreamToTravelsApp').then(m => ({ default: m.DreamToTravelsApp }))));
const SouthernTravelsApp = withSuspense(React.lazy(() => import('../southerntravels/SouthernTravelsApp').then(m => ({ default: m.SouthernTravelsApp }))));
const SrmHolidaysApp = withSuspense(React.lazy(() => import('../srmholidays/SrmHolidaysApp').then(m => ({ default: m.SrmHolidaysApp }))));
const ItdcTravelsApp = withSuspense(React.lazy(() => import('../itdctravels/ItdcTravelsApp').then(m => ({ default: m.ItdcTravelsApp }))));
const TravelArtApp = withSuspense(React.lazy(() => import('../travelart/TravelArtApp').then(m => ({ default: m.TravelArtApp }))));
const BrioTravelsApp = withSuspense(React.lazy(() => import('../../demos/tour-travel/brio-travels/BrioTravelsApp').then(m => ({ default: m.BrioTravelsApp }))));
const TourTravel2App = withSuspense(React.lazy(() => import('../../demos/tour-travel-2/TourTravel2App').then(m => ({ default: m.TourTravel2App }))));
const VeenaWorldApp = withSuspense(React.lazy(() => import('../veenaworld/VeenaWorldApp').then(m => ({ default: m.VeenaWorldApp }))));
const BodycraftApp = withSuspense(React.lazy(() => import('../bodycraft/BodycraftApp').then(m => ({ default: m.BodycraftApp }))));
const HomeSalonApp = withSuspense(React.lazy(() => import('../homesalon/HomeSalonApp').then(m => ({ default: m.HomeSalonApp }))));
const DessangeMumbaiApp = withSuspense(React.lazy(() => import('../dessange/DessangeMumbaiApp').then(m => ({ default: m.DessangeMumbaiApp }))));
const TanishqApp = withSuspense(React.lazy(() => import('../tanishq/TanishqApp').then(m => ({ default: m.TanishqApp }))));
const JewelboxApp = withSuspense(React.lazy(() => import('../jewelbox/JewelboxApp').then(m => ({ default: m.JewelboxApp }))));
const BeautyBerryApp = withSuspense(React.lazy(() => import('../beautyberry/BeautyBerryApp').then(m => ({ default: m.BeautyBerryApp }))));
const GoldsGymApp = withSuspense(React.lazy(() => import('../goldsgym/GoldsGymApp').then(m => ({ default: m.GoldsGymApp }))));
const FitpassApp = withSuspense(React.lazy(() => import('../fitpass/FitpassApp').then(m => ({ default: m.FitpassApp }))));
const KrishnaJewellersApp = withSuspense(React.lazy(() => import('../krishnajewellers/KrishnaJewellersApp').then(m => ({ default: m.KrishnaJewellersApp }))));
const HazoorilalApp = withSuspense(React.lazy(() => import('../hazoorilal/HazoorilalApp').then(m => ({ default: m.HazoorilalApp }))));
const SabkaLoansApp = withSuspense(React.lazy(() => import('../sabkaloans/SabkaLoansApp').then(m => ({ default: m.SabkaLoansApp }))));

const getHeaderCity = (city?: string, address?: string): string => {
  if (typeof city === 'string' && city.trim()) return city.trim();
  if (typeof address === 'string' && address.trim()) {
    try {
      const parts = address.split(',');
      if (parts.length > 0 && parts[0]) {
        return parts[0].trim();
      }
      return address.trim();
    } catch {
      return address.trim();
    }
  }
  return 'Local Business';
};

const getActionBookingLabel = (label?: string): string => {
  if (typeof label === 'string' && label.trim()) {
    try {
      const firstWord = label.trim().split(/\s+/)[0];
      if (firstWord) return `${firstWord} Now`;
    } catch {
      // fallback
    }
  }
  return 'Book Now';
};

interface SiteRendererProps {
  site?: BusinessWebsite;
  isPreview?: boolean;
}

export const SiteRenderer: React.FC<SiteRendererProps> = ({ site: propSite, isPreview = false }) => {
  const { activeSiteSlug, getWebsiteBySlug, setActiveView, submitLead, isAdminAuthenticated } = useApp();

  const rawSite = propSite || (activeSiteSlug ? getWebsiteBySlug(activeSiteSlug) : undefined);
  const site = rawSite ? normalizeBusinessSite(rawSite) : undefined;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [showPropertyPortal, setShowPropertyPortal] = useState<boolean>(false);
  const [selectedItemForLead, setSelectedItemForLead] = useState<ItemOrService | null>(null);
  const [pwaInstalled, setPwaInstalled] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [installInfoMsg, setInstallInfoMsg] = useState<string | null>(null);

  // Quick Hero Form States for split-form archetype
  const [quickHeroName, setQuickHeroName] = useState<string>('');
  const [quickHeroPhone, setQuickHeroPhone] = useState<string>('');
  const [quickHeroService, setQuickHeroService] = useState<string>('');
  const [quickHeroSubmitted, setQuickHeroSubmitted] = useState<boolean>(false);

  // Title sync
  useEffect(() => {
    if (!site) return;
    document.title = `${site.businessName} — Official Website & Bookings`;
  }, [site]);

  // PWA Install prompt listener
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          setPwaInstalled(true);
        }
        setDeferredPrompt(null);
      });
    } else {
      setInstallInfoMsg(
        `To install ${site?.businessName || 'this site'} as an app on your phone, tap your browser's Share/Menu icon and choose "Add to Home Screen".`
      );
      setTimeout(() => setInstallInfoMsg(null), 5000);
    }
  };

  const targetSlug = site?.slug || activeSiteSlug || '';
  const targetTemplate = site?.templateId || '';

  // Website 1: 2D Cafe
  if (
    targetSlug === '2d-cafe' ||
    targetSlug === 'references/2d-cafe' ||
    targetSlug === '/references/2d-cafe/' ||
    targetTemplate === '2d-cafe'
  ) {
    return <TwoDCafeApp />;
  }

  // Website 2: Blue Tokai
  if (
    targetSlug === 'blue-tokai' ||
    targetSlug === 'references/blue-tokai' ||
    targetSlug === '/references/blue-tokai/' ||
    targetTemplate === 'blue-tokai'
  ) {
    return <BlueTokaiApp />;
  }

  // Website 3: Third Wave Coffee
  if (
    targetSlug === 'third-wave' ||
    targetSlug === 'references/third-wave' ||
    targetSlug === '/references/third-wave/' ||
    targetTemplate === 'third-wave'
  ) {
    return <ThirdWaveApp />;
  }

  // Website 4: Cafe Coffee Day
  if (
    targetSlug === 'cafe-coffee-day' ||
    targetSlug === 'references/cafe-coffee-day' ||
    targetSlug === '/references/cafe-coffee-day/' ||
    targetTemplate === 'cafe-coffee-day'
  ) {
    return <CafeCoffeeDayApp />;
  }

  // Website 5: Koffee Hut (Sweet Coffee)
  if (
    targetSlug === 'sweet-coffee' ||
    targetSlug === 'koffee-hut' ||
    targetSlug === 'references/koffee-hut' ||
    targetSlug === '/references/koffee-hut/' ||
    targetTemplate === 'sweet-coffee' ||
    targetTemplate === 'koffee-hut'
  ) {
    return <SweetCoffeeApp />;
  }

  // Website 6: Tim Wendelboe
  if (
    targetSlug === 'brew-bloom-tim-wendelboe' ||
    targetSlug === 'tim-wendelboe' ||
    targetSlug === 'references/tim-wendelboe' ||
    targetSlug === '/references/tim-wendelboe/' ||
    targetTemplate === 'tim-wendelboe'
  ) {
    return <TimWendelboeApp />;
  }

  // Website 7: Onyx Coffee Lab EU
  if (
    targetSlug === 'brew-bloom-onyx' ||
    targetSlug === 'onyx' ||
    targetSlug === 'onyx-coffee-lab' ||
    targetSlug === 'references/onyx-coffee-lab' ||
    targetSlug === '/references/onyx-coffee-lab/' ||
    targetTemplate === 'onyx-coffee'
  ) {
    return <OnyxApp />;
  }

  // Website 8: City Brew
  if (
    targetSlug === 'brew-bloom-city-brew' ||
    targetSlug === 'city-brew' ||
    targetSlug === 'references/city-brew' ||
    targetSlug === '/references/city-brew/' ||
    targetTemplate === 'city-brew'
  ) {
    return <CityBrewApp />;
  }

  // Website 9: Gregorys Coffee
  if (
    targetSlug === 'brew-bloom-gregorys' ||
    targetSlug === 'gregorys' ||
    targetSlug === 'gregorys-coffee' ||
    targetSlug === 'references/gregorys-coffee' ||
    targetSlug === '/references/gregorys-coffee/' ||
    targetTemplate === 'gregorys-coffee'
  ) {
    return <GregorysApp />;
  }

  // Website 10: Ruby's Cafe
  if (
    targetSlug === 'rubys-cafe' ||
    targetSlug === 'brew-bloom-rubys' ||
    targetSlug === 'rubys' ||
    targetSlug === 'references/rubys-cafe' ||
    targetSlug === '/references/rubys-cafe/' ||
    targetTemplate === 'rubys-cafe'
  ) {
    return <RubysApp />;
  }

  // Website 11: Brewed Coffee Shop
  if (
    targetSlug === 'brewed-coffee-shop' ||
    targetSlug === 'brew-bloom-brewed' ||
    targetSlug === 'brewed' ||
    targetSlug === 'references/brewed-coffee-shop' ||
    targetSlug === '/references/brewed-coffee-shop/' ||
    targetTemplate === 'brewed-coffee-shop'
  ) {
    return <BrewedApp />;
  }

  // Website 12: Greenberry's
  if (
    targetSlug === 'greenberrys' ||
    targetSlug === 'brew-bloom-greenberrys' ||
    targetSlug === 'references/greenberrys' ||
    targetSlug === '/references/greenberrys/' ||
    targetTemplate === 'greenberrys'
  ) {
    return <GreenberrysApp />;
  }

  // Website 13: Mean Mug Coffeehouse
  if (
    targetSlug === 'mean-mug' ||
    targetSlug === 'brew-bloom-mean-mug' ||
    targetSlug === 'references/mean-mug' ||
    targetSlug === '/references/mean-mug/' ||
    targetTemplate === 'mean-mug'
  ) {
    return <MeanMugApp />;
  }

  // Website 14: Revival Cafe & Kitchen
  if (
    targetSlug === 'revival-cafe' ||
    targetSlug === 'brew-bloom-revival' ||
    targetSlug === 'revival' ||
    targetSlug === 'references/revival-cafe' ||
    targetSlug === '/references/revival-cafe/' ||
    targetTemplate === 'revival-cafe'
  ) {
    return <RevivalCafeApp />;
  }

  // Website 15: Subko Coffee (recreated as BREW & BLOOM)
  if (
    targetSlug === 'brew-bloom' ||
    targetSlug === 'subko' ||
    targetSlug === 'references/subko' ||
    targetSlug === '/references/subko/' ||
    targetTemplate === 'brew-bloom' ||
    targetTemplate === 'subko'
  ) {
    return <BrewBloomApp />;
  }

  // Website 16: American Provisions
  if (
    targetSlug === 'american-provisions' ||
    targetSlug === 'references/american-provisions' ||
    targetSlug === '/references/american-provisions/' ||
    targetTemplate === 'american-provisions'
  ) {
    return <AmericanProvisionsApp />;
  }

  // Website 17: Mojo Coffee House
  if (
    targetSlug === 'mojo-coffee' ||
    targetSlug === 'mojocoffee' ||
    targetSlug === 'references/mojo-coffee' ||
    targetSlug === '/references/mojo-coffee/' ||
    targetTemplate === 'mojo-coffee'
  ) {
    return <MojoCoffeeApp />;
  }

  // Website 18: Sweetwaters Cafe
  if (
    targetSlug === 'sweetwaters' ||
    targetSlug === 'sweetwaters-cafe' ||
    targetSlug === 'references/sweetwaters' ||
    targetSlug === '/references/sweetwaters/' ||
    targetTemplate === 'sweetwaters'
  ) {
    return <SweetwatersApp />;
  }

  // Website 19: Benne
  if (
    targetSlug === 'benne' ||
    targetSlug === 'references/benne' ||
    targetSlug === '/references/benne/' ||
    targetTemplate === 'benne'
  ) {
    return <BenneApp />;
  }

  // Restaurant 1: Barbeque Nation
  if (
    targetSlug === 'barbeque-nation' ||
    targetSlug === 'references/barbeque-nation' ||
    targetSlug === '/references/barbeque-nation/' ||
    targetTemplate === 'barbeque-nation'
  ) {
    return <BarbequeNationApp />;
  }

  // Restaurant 2: Nando's India
  if (
    targetSlug === 'nandos' ||
    targetSlug === 'nandos-india' ||
    targetSlug === 'references/nandos' ||
    targetSlug === '/references/nandos/' ||
    targetTemplate === 'nandos'
  ) {
    return <NandosApp />;
  }

  // Restaurant 3: Mainland China
  if (
    targetSlug === 'mainland-china' ||
    targetSlug === 'references/mainland-china' ||
    targetSlug === '/references/mainland-china/' ||
    targetTemplate === 'mainland-china'
  ) {
    return <MainlandChinaApp />;
  }

  // Restaurant 4: Oh! Calcutta
  if (
    targetSlug === 'oh-calcutta' ||
    targetSlug === 'ohcalcutta' ||
    targetSlug === 'references/oh-calcutta' ||
    targetSlug === '/references/oh-calcutta/' ||
    targetTemplate === 'oh-calcutta'
  ) {
    return <OhCalcuttaApp />;
  }

  // Restaurant 5: Punjab Grill
  if (
    targetSlug === 'punjab-grill' ||
    targetSlug === 'punjabgrill' ||
    targetSlug === 'references/punjab-grill' ||
    targetSlug === '/references/punjab-grill/' ||
    targetTemplate === 'punjab-grill'
  ) {
    return <PunjabGrillApp />;
  }

  // Restaurant 6: Bikanervala
  if (
    targetSlug === 'bikanervala' ||
    targetSlug === 'references/bikanervala' ||
    targetSlug === '/references/bikanervala/' ||
    targetTemplate === 'bikanervala'
  ) {
    return <BikanervalaApp />;
  }

  // Restaurant 7: Sagar Ratna
  if (
    targetSlug === 'sagar-ratna' ||
    targetSlug === 'sagarratna' ||
    targetSlug === 'references/sagar-ratna' ||
    targetSlug === '/references/sagar-ratna/' ||
    targetTemplate === 'sagar-ratna'
  ) {
    return <SagarRatnaApp />;
  }

  // Restaurant 8: Karim's
  if (
    targetSlug === 'karims' ||
    targetSlug === 'karim' ||
    targetSlug === 'references/karims' ||
    targetSlug === '/references/karims/' ||
    targetTemplate === 'karims'
  ) {
    return <KarimsApp />;
  }

  // Restaurant 9: Al Baik
  if (
    targetSlug === 'al-baik' ||
    targetSlug === 'albaik' ||
    targetSlug === 'references/al-baik' ||
    targetSlug === '/references/al-baik/' ||
    targetTemplate === 'al-baik'
  ) {
    return <AlBaikApp />;
  }

  // Restaurant 10: Mr. Idli
  if (
    targetSlug === 'mr-idli' ||
    targetSlug === 'mridli' ||
    targetSlug === 'references/mr-idli' ||
    targetSlug === '/references/mr-idli/' ||
    targetTemplate === 'mr-idli'
  ) {
    return <MrIdliApp />;
  }

  // Website 30: DreamScape Travels (Tour & Travel - dreamtotravels.com)
  if (
    targetSlug === 'dream-travels' ||
    targetSlug === 'dream-to-travels' ||
    targetSlug === 'dreamtotravels' ||
    targetSlug === 'references/dreamtotravels' ||
    targetSlug === '/references/dreamtotravels/' ||
    targetSlug === 'references/dream-to-travels' ||
    targetSlug === '/references/dream-to-travels/' ||
    targetSlug === 'tour-travel' ||
    targetSlug === 'auravoyage' ||
    targetTemplate === 'travel-agency' ||
    targetTemplate === 'dream-travels'
  ) {
    return <DreamToTravelsApp />;
  }

  // Website 31: Southern Travels (southerntravelsindia.com)
  if (
    targetSlug === 'southern-travels' ||
    targetSlug === 'southerntravels' ||
    targetSlug === 'southern-travels-india' ||
    targetSlug === 'references/southern-travels' ||
    targetSlug === '/references/southern-travels/' ||
    targetSlug === 'brandstore.aspx-new-delhi' ||
    targetTemplate === 'southern-travels'
  ) {
    return <SouthernTravelsApp />;
  }

  // Website 32: SRM Holidays (srmholidays.in)
  if (
    targetSlug === 'srm-holidays' ||
    targetSlug === 'srmholidays' ||
    targetSlug === 'references/srm-holidays' ||
    targetSlug === '/references/srm-holidays/' ||
    targetTemplate === 'srm-holidays'
  ) {
    return <SrmHolidaysApp />;
  }

  // Website 33: Ashok Travels & Tours / ITDC (itdc.co.in/travels-tours/)
  if (
    targetSlug === 'itdc-travels' ||
    targetSlug === 'itdc' ||
    targetSlug === 'ashok-travels' ||
    targetSlug === 'travels-tours' ||
    targetSlug === 'references/itdc-travels' ||
    targetSlug === '/references/itdc-travels/' ||
    targetSlug === 'references/ashok-travels' ||
    targetSlug === '/references/ashok-travels/' ||
    targetTemplate === 'itdc-travels'
  ) {
    return <ItdcTravelsApp />;
  }

  // Website 34: Travel Art Company (travelartcompany.com)
  if (
    targetSlug === 'travel-art' ||
    targetSlug === 'travelart' ||
    targetSlug === 'travel-art-company' ||
    targetSlug === 'travelartcompany' ||
    targetSlug === 'references/travel-art' ||
    targetSlug === '/references/travel-art/' ||
    targetTemplate === 'travel-art'
  ) {
    return <TravelArtApp />;
  }

  // Website 35: Brio Travels (Tour & Travel - Delhi)
  if (
    targetSlug === 'brio-travels' ||
    targetSlug === 'briotravels' ||
    targetSlug === 'demos/tour-travel/brio-travels' ||
    targetSlug === 'demos/tour-travel' ||
    targetSlug === 'references/brio-travels' ||
    targetSlug === '/references/brio-travels/' ||
    targetTemplate === 'brio-travels'
  ) {
    return <BrioTravelsApp />;
  }

  // Website 36: VenturePulse Holidays (Tour & Travel 2)
  if (
    targetSlug === 'tour-travel-2' ||
    targetSlug === 'tourtravel2' ||
    targetSlug === 'demos/tour-travel-2' ||
    targetSlug === 'demos/tour-travel-2/' ||
    targetSlug === 'references/tour-travel-2' ||
    targetSlug === '/references/tour-travel-2/' ||
    targetTemplate === 'tour-travel-2'
  ) {
    return <TourTravel2App />;
  }

  // Website 37: Veena World (veenaworld.com)
  if (
    targetSlug === 'veena-world' ||
    targetSlug === 'veenaworld' ||
    targetSlug === 'veena-world-tours' ||
    targetSlug === 'references/veena-world' ||
    targetSlug === '/references/veena-world/' ||
    targetSlug === 'references/veenaworld' ||
    targetSlug === '/references/veenaworld/' ||
    targetTemplate === 'veena-world'
  ) {
    return <VeenaWorldApp />;
  }

  // Website 37: Bodycraft Salon, Clinic & Spa (bodycraft.co.in)
  if (
    targetSlug === 'bodycraft' ||
    targetSlug === 'bodycraft-salon' ||
    targetSlug === 'bodycraft-clinic' ||
    targetSlug === 'bodycraft-spa' ||
    targetSlug === 'references/bodycraft' ||
    targetSlug === '/references/bodycraft/' ||
    targetSlug === 'demo/bodycraft' ||
    targetTemplate === 'bodycraft'
  ) {
    return <BodycraftApp />;
  }

  // Website 38: Home Salon & Spa (homesalon.in)
  if (
    targetSlug === 'home-salon' ||
    targetSlug === 'homesalon' ||
    targetSlug === 'references/home-salon' ||
    targetSlug === '/references/home-salon/' ||
    targetSlug === 'demo/home-salon' ||
    targetTemplate === 'home-salon'
  ) {
    return <HomeSalonApp />;
  }

  // Website 39: DESSANGE Mumbai (dessangemumbai.com)
  if (
    targetSlug === 'dessange-mumbai' ||
    targetSlug === 'dessange' ||
    targetSlug === 'dessangemumbai' ||
    targetSlug === 'references/dessange-mumbai' ||
    targetSlug === '/references/dessange-mumbai/' ||
    targetSlug === 'demo/dessange-mumbai' ||
    targetSlug === 'demos/dessange-mumbai' ||
    targetTemplate === 'dessange-mumbai' ||
    targetTemplate === 'dessange'
  ) {
    return <DessangeMumbaiApp />;
  }

  // Website 40: Tanishq (tanishq.co.in)
  if (
    targetSlug === 'tanishq' ||
    targetSlug === 'references/tanishq' ||
    targetSlug === '/references/tanishq/' ||
    targetSlug === 'demo/tanishq' ||
    targetSlug === 'demos/tanishq' ||
    targetTemplate === 'tanishq'
  ) {
    return <TanishqApp />;
  }

  // Website 41: Jewelbox (jewelbox.co.in)
  if (
    targetSlug === 'jewelbox' ||
    targetSlug === 'references/jewelbox' ||
    targetSlug === '/references/jewelbox/' ||
    targetSlug === 'demo/jewelbox' ||
    targetSlug === 'demos/jewelbox' ||
    targetTemplate === 'jewelbox'
  ) {
    return <JewelboxApp />;
  }

  // Website 42: Beauty Berry (beautyberry.co.in)
  if (
    targetSlug === 'beauty-berry' ||
    targetSlug === 'beautyberry' ||
    targetSlug === 'references/beauty-berry' ||
    targetSlug === '/references/beauty-berry/' ||
    targetSlug === 'demo/beauty-berry' ||
    targetSlug === 'demos/beauty-berry' ||
    targetTemplate === 'beautyberry' ||
    targetTemplate === 'beauty-berry'
  ) {
    return <BeautyBerryApp />;
  }

  // Website 43: Gold's Gym (goldsgym.in)
  if (
    targetSlug === 'golds-gym' ||
    targetSlug === 'goldsgym' ||
    targetSlug === 'references/golds-gym' ||
    targetSlug === '/references/golds-gym/' ||
    targetSlug === 'demo/golds-gym' ||
    targetSlug === 'demos/golds-gym' ||
    targetTemplate === 'goldsgym' ||
    targetTemplate === 'golds-gym'
  ) {
    return <GoldsGymApp />;
  }

  // Website 44: FITPASS (fitpass.co.in)
  if (
    targetSlug === 'fitpass' ||
    targetSlug === 'references/fitpass' ||
    targetSlug === '/references/fitpass/' ||
    targetSlug === 'demo/fitpass' ||
    targetSlug === 'demos/fitpass' ||
    targetTemplate === 'fitpass'
  ) {
    return <FitpassApp />;
  }

  // Website 45: Krishna Jewellers (krishnajewellers.com)
  if (
    targetSlug === 'krishna-jewellers' ||
    targetSlug === 'krishnajewellers' ||
    targetSlug === 'references/krishna-jewellers' ||
    targetSlug === '/references/krishna-jewellers/' ||
    targetSlug === 'demo/krishna-jewellers' ||
    targetSlug === 'demos/krishna-jewellers' ||
    targetTemplate === 'krishna-jewellers' ||
    targetTemplate === 'krishnajewellers'
  ) {
    return <KrishnaJewellersApp />;
  }

  if (
    targetSlug === 'hazoorilal-jewellers' ||
    targetSlug === 'hazoorilal' ||
    targetSlug === 'references/hazoorilal-jewellers' ||
    targetSlug === '/references/hazoorilal-jewellers/' ||
    targetSlug === 'demo/hazoorilal-jewellers' ||
    targetSlug === 'demos/hazoorilal-jewellers' ||
    targetTemplate === 'hazoorilal-jewellers' ||
    targetTemplate === 'hazoorilal'
  ) {
    return <HazoorilalApp />;
  }

  // Website 49: Sabka Loans (sabkaloans.in)
  if (
    targetSlug === 'sabka-loans' ||
    targetSlug === 'loans' ||
    targetSlug === 'references/brightloans' ||
    targetSlug === '/references/brightloans/' ||
    targetSlug === 'references/sabka-loans' ||
    targetSlug === '/references/sabka-loans/' ||
    targetSlug === 'demo/sabka-loans' ||
    targetSlug === 'demos/sabka-loans' ||
    targetTemplate === 'sabka-loans' ||
    targetTemplate === 'loans'
  ) {
    return <SabkaLoansApp />;
  }

  if (!site) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Website Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">
          The requested business address raositez.in/{activeSiteSlug} does not exist or may have been unlisted.
        </p>
        <button
          onClick={() => setActiveView('home')}
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors"
        >
          Return to RaoSitez Home
        </button>
      </div>
    );
  }

  // Safe Categories extracted from items
  const itemCategories = Array.from(new Set((site.items || []).map(i => i.category))).filter(Boolean);

  const cleanPhone = (site.phone || '').replace(/[^0-9+]/g, '');
  const cleanWhatsapp = (site.whatsapp || site.phone || '').replace(/[^0-9]/g, '');

  const handleDirectWhatsApp = (customText?: string) => {
    const text = encodeURIComponent(
      customText ||
      `Hello ${site.businessName}! I saw your website and would like to enquire about your services/products.`
    );
    window.open(`https://wa.me/${cleanWhatsapp}?text=${text}`, '_blank');
  };

  const toggleCategoryCollapse = (cat: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const isSectionEnabled = (sectionId: string) => {
    const s = site.sections?.find(sec => sec.id === sectionId);
    return s ? s.isEnabled : true;
  };

  const getSectionTitle = (sectionId: string, fallback: string) => {
    const s = site.sections?.find(sec => sec.id === sectionId);
    return s ? s.title : fallback;
  };

  const isDraftOrPending = site.status === 'draft' || site.status === 'pending_approval';
  const categoryTokens = getCategoryToken(site.category);

  // Reference Design Registry Resolution
  const registryItem = site.referenceSiteId
    ? getReferenceRegistryItemById(site.referenceSiteId)
    : undefined;

  const blueprint = site.designBlueprint || registryItem?.blueprint;

  // Fallback category items
  const categoryItem = getCategoryReferences(site.category);
  const matchingRefSite = site.referenceSiteId
    ? categoryItem?.references.find(r => r.id === site.referenceSiteId)
    : categoryItem?.references[0];

  const designSig = blueprint || site.designSignature || matchingRefSite?.designSignature || {
    palette: {
      baseBg: categoryTokens.baseBg || '#0f172a',
      surfaceBg: '#ffffff',
      textColor: categoryTokens.textColor || '#ffffff',
      bodyTextColor: '#1f2937',
      accentColor: site.primaryColor || categoryTokens.accentColor || '#4f46e5',
      secondaryAccent: site.secondaryColor || '#6366f1'
    },
    typography: {
      headlineFont: site.fontFamily || categoryTokens.headlineFont || 'Plus Jakarta Sans, sans-serif',
      bodyFont: categoryTokens.bodyFont || 'Inter, sans-serif',
      fontPairingLabel: `${site.fontFamily || categoryTokens.headlineFont} + Inter`
    },
    layoutArchetype: 'bold-editorial',
    heroArchetype: 'cinematic-overlay',
    navStyle: 'solid-compact',
    catalogStyle: 'grid-cards',
    bookingStyle: site.bookingType || 'whatsapp_order',
    vibeTag: (categoryTokens as any).vibeTag || 'Professional'
  };

  const palette = blueprint?.palette || designSig.palette || {
    baseBg: '#0f172a',
    surfaceBg: '#ffffff',
    textColor: '#ffffff',
    bodyTextColor: '#1f2937',
    accentColor: site.primaryColor || '#4f46e5',
    secondaryAccent: '#6366f1'
  };
  const typography = blueprint?.typography || designSig.typography || {
    headlineFont: site.fontFamily || 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter'
  };
  const headlineFont = typography.headlineFont || site.fontFamily || 'Plus Jakarta Sans, sans-serif';
  const bodyFont = typography.bodyFont || 'Inter, sans-serif';
  const heroArchetype = blueprint?.hero?.archetype || designSig.heroArchetype || 'cinematic-overlay';
  const navStyle = blueprint?.header?.navStyle || designSig.navStyle || 'solid-compact';
  const catalogStyle = blueprint?.catalog?.style || designSig.catalogStyle || 'grid-cards';
  const refSiteName = registryItem?.referenceWebsiteName || site.referenceSiteName || matchingRefSite?.name;
  const refSiteUrl = registryItem?.originalReferenceUrl || site.referenceSiteUrl || matchingRefSite?.url;
  const refFeatures = registryItem?.featuresToStudy || site.referenceFeatures || matchingRefSite?.features;
  const inspectionStatus = registryItem?.inspectionStatus || site.inspectionStatus || 'inspected';
  const dynamicSections: DynamicSectionDefinition[] = (blueprint?.sections && blueprint.sections.length > 0)
    ? blueprint.sections
    : [];

  // Dynamic Google Font Injection
  useEffect(() => {
    const cleanFont = (f?: string) => {
      if (!f) return '';
      return f.split(',')[0].replace(/['"]/g, '').trim();
    };
    const fonts = [cleanFont(headlineFont), cleanFont(bodyFont)].filter(
      f => f && !['Inter', 'system-ui', 'sans-serif', 'serif', 'monospace', 'Arial', 'Helvetica'].includes(f)
    );
    if (fonts.length === 0) return;

    const id = 'raositez-dynamic-reference-fonts';
    let linkEl = document.getElementById(id) as HTMLLinkElement;
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.id = id;
      linkEl.rel = 'stylesheet';
      document.head.appendChild(linkEl);
    }
    const params = fonts.map(f => `family=${encodeURIComponent(f)}:wght@400;500;600;700;800;900`).join('&');
    linkEl.href = `https://fonts.googleapis.com/css2?${params}&display=swap`;
  }, [headlineFont, bodyFont]);

  const handleQuickHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickHeroPhone) return;
    await submitLead({
      websiteSlug: site.slug,
      businessName: site.businessName,
      customerName: quickHeroName || 'Website Visitor',
      customerPhone: quickHeroPhone,
      message: `Quick enquiry from hero: ${quickHeroService || 'General Inquiry'}`,
      serviceRequested: quickHeroService,
      bookingType: site.bookingType,
      status: 'new'
    });
    setQuickHeroSubmitted(true);
    setTimeout(() => {
      setQuickHeroSubmitted(false);
      setQuickHeroName('');
      setQuickHeroPhone('');
      setQuickHeroService('');
    }, 4000);
  };

  if (showPropertyPortal) {
    return <RealEstatePropertyExplorer onBackToSite={() => setShowPropertyPortal(false)} />;
  }

  return (
    <div
      className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900 pb-20 sm:pb-0"
      style={{ fontFamily: bodyFont }}
    >
      {/* Real Estate Portal Prompt Banner */}
      {site.category === 'realestate' && (
        <div className="bg-[#14162B] text-white px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-3 border-b border-[#232742]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#FF6B4A] text-white font-bold text-[10px] uppercase">
              RERA Portal
            </span>
            <span className="font-medium text-[#FAFAF8]">
              Browse 3 BHKs, Penthouses & Villas with interactive EMI Calculator & Free AC Site Visit Cab
            </span>
          </div>
          <button
            onClick={() => setShowPropertyPortal(true)}
            className="px-3 py-1.5 bg-[#FF6B4A] hover:bg-[#F25A38] text-white font-bold rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1 shadow-sm"
          >
            <span>Launch Property Explorer</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Draft / Pending Watermark Banner */}
      {isDraftOrPending && (
        <div className="bg-amber-500 text-amber-950 px-4 py-2 text-xs font-bold text-center flex items-center justify-center gap-2 border-b border-amber-600">
          <span>⚠️ PREVIEW MODE: Status is "{site.status.replace('_', ' ').toUpperCase()}".</span>
          {isAdminAuthenticated && (
            <button
              onClick={() => setActiveView('admin')}
              className="underline hover:text-black ml-2"
            >
              Open in Admin
            </button>
          )}
        </div>
      )}

      {/* Reference Inspection Status Warning (Parts 3 & 10) */}
      {(inspectionStatus === 'manual_required' || inspectionStatus === 'inaccessible') && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-bold text-[10px] uppercase">
              Manual Verification Required
            </span>
            <span>
              The reference design for <strong>{refSiteName || site.referenceSiteId}</strong> has not completed automated inspection and requires administrator screenshot upload or approval.
            </span>
          </div>
          {isAdminAuthenticated && (
            <button
              onClick={() => setActiveView('admin')}
              className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-[11px] cursor-pointer"
            >
              Verify in Admin Registry
            </button>
          )}
        </div>
      )}

      {/* Top RaoSitez Hosting Bar (when viewing standalone) */}
      {!isPreview && (
        <div className="bg-slate-900 text-slate-300 text-xs px-3 sm:px-4 py-2 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('home')}
              className="inline-flex items-center gap-1.5 text-white font-bold hover:text-indigo-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RaoSitez</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="font-mono text-slate-400 text-[11px] truncate max-w-[120px] sm:max-w-md">
              {site.slug}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleInstallPWA}
              title="Add to Home Screen (PWA)"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 bg-slate-800 px-2 py-1 rounded"
            >
              <Download className="w-3 h-3" />
              <span className="hidden sm:inline">Install App</span>
            </button>

            <button
              onClick={() => setShowQrModal(true)}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800 px-2 py-1 rounded"
            >
              <QrCode className="w-3 h-3 text-indigo-400" />
              <span className="hidden sm:inline">QR Code</span>
            </button>

            {isAdminAuthenticated && (
              <button
                onClick={() => setActiveView('admin')}
                className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      )}

      {/* Header matching navStyle */}
      {navStyle === 'floating-glass' ? (
        <header className="sticky top-3 z-30 px-3 sm:px-4 max-w-6xl mx-auto w-full transition-all">
          <div className="bg-white/85 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {site.logoUrl ? (
                <img
                  src={site.logoUrl}
                  alt={site.businessName}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl object-cover border border-slate-200 shadow-xs shrink-0"
                />
              ) : (
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white font-extrabold text-base shadow-sm shrink-0"
                  style={{ backgroundColor: palette.accentColor }}
                >
                  {(site.businessName || 'B').charAt(0)}
                </div>
              )}
              <div className="min-w-0">
                <h1
                  className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-tight truncate"
                  style={{ fontFamily: headlineFont }}
                >
                  {site.businessName}
                </h1>
                <p className="text-[11px] text-slate-500 font-medium truncate">
                  {getHeaderCity(site.city, site.address)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${cleanPhone}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" style={{ color: palette.accentColor }} />
                <span>Call</span>
              </a>
              <button
                onClick={() => handleDirectWhatsApp()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white rounded-xl shadow-xs transition-all cursor-pointer"
                style={{ backgroundColor: '#16a34a' }}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </header>
      ) : navStyle === 'split-centered' ? (
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  <Phone className="w-3.5 h-3.5" style={{ color: palette.accentColor }} />
                  <span className="hidden sm:inline">{site.phone}</span>
                </a>
              </div>
              <div className="text-center">
                <h1
                  className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight"
                  style={{ fontFamily: headlineFont }}
                >
                  {site.businessName}
                </h1>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  {categoryTokens.name} · {getHeaderCity(site.city, site.address)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDirectWhatsApp()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white rounded-xl shadow-xs transition-all cursor-pointer"
                  style={{ backgroundColor: palette.accentColor }}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : navStyle === 'action-heavy' ? (
        <header className="sticky top-0 z-30 bg-white border-b-2 border-slate-900 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <div className="flex items-center gap-3">
                {site.logoUrl ? (
                  <img
                    src={site.logoUrl}
                    alt={site.businessName}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                ) : (
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm shrink-0"
                    style={{ backgroundColor: palette.accentColor }}
                  >
                    {(site.businessName || 'B').charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h1
                      className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight truncate"
                      style={{ fontFamily: headlineFont }}
                    >
                      {site.businessName}
                    </h1>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Open Now
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {site.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 bg-amber-300 hover:bg-amber-400 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {cleanPhone.slice(-10)}</span>
                </a>
                <button
                  onClick={() => handleDirectWhatsApp()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : (
        /* solid-compact default */
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <div className="flex items-center gap-3">
                {site.logoUrl ? (
                  <img
                    src={site.logoUrl}
                    alt={site.businessName}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-slate-200 shadow-xs shrink-0"
                  />
                ) : (
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-base sm:text-lg shadow-sm shrink-0"
                    style={{ backgroundColor: palette.accentColor }}
                  >
                    {(site.businessName || 'B').charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <h1
                    className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight truncate"
                    style={{ fontFamily: headlineFont }}
                  >
                    {site.businessName}
                  </h1>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {getHeaderCity(site.city, site.address)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${cleanPhone}`}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5" style={{ color: palette.accentColor }} />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => handleDirectWhatsApp()}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-all min-h-[44px]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Hero Section styled with Category Reference Signature */}
      <section
        className="relative overflow-hidden py-12 sm:py-20 transition-colors"
        style={{
          backgroundColor: palette.baseBg,
          color: palette.textColor
        }}
      >
        {site.coverUrl && (
          <div className="absolute inset-0 z-0">
            <img
              src={site.coverUrl}
              alt={site.businessName}
              className="w-full h-full object-cover opacity-20 filter brightness-90 scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t"
              style={{
                backgroundImage: `linear-gradient(to top, ${palette.baseBg} 0%, transparent 60%, rgba(0,0,0,0.3) 100%)`
              }}
            />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {heroArchetype === 'split-form' ? (
            /* Split Form Hero: Left details, Right instant booking card */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                {/* Reference Website Attribution Chip */}
                {refSiteName && (
                  <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 backdrop-blur-xs border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Reference Style: <strong>{refSiteName}</strong></span>
                    {refSiteUrl && (
                      <a
                        href={refSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-amber-300 hover:text-white underline ml-1"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3 text-xs opacity-90 font-['Inter']">
                  <span
                    className="font-bold uppercase tracking-wider text-[11px]"
                    style={{ color: palette.accentColor }}
                  >
                    {categoryTokens.name}
                  </span>
                  <span aria-hidden="true" className="opacity-50">·</span>
                  <span className="text-[11px] opacity-80">{designSig.typography.fontPairingLabel}</span>
                  {site.specialBadge && (
                    <>
                      <span aria-hidden="true" className="opacity-50">·</span>
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-bold"
                        style={{
                          backgroundColor: palette.accentColor,
                          color: palette.baseBg
                        }}
                      >
                        ★ {site.specialBadge}
                      </span>
                    </>
                  )}
                </div>

                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3 drop-shadow-md"
                  style={{ fontFamily: headlineFont }}
                >
                  {site.tagline || site.businessName}
                </h2>

                <p
                  className="text-xs sm:text-sm leading-relaxed mb-6 max-w-xl opacity-90 drop-shadow-xs"
                  style={{ color: palette.textColor }}
                >
                  {site.description}
                </p>

                {/* Key reassurance badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 max-w-lg text-xs opacity-95">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">Verified Quality</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/15">
                    <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                    <span className="font-semibold">Fast Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/15 col-span-2 sm:col-span-1">
                    <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="font-semibold">100% Genuine</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{site.openingHours}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span className="truncate max-w-[280px]">{site.address}</span>
                  </div>
                </div>
              </div>

              {/* Right column: Interactive Quick Inquiry Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 text-slate-900">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Quick Order & Enquiry
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Instant Response
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Leave your contact details and our team will get back to you immediately.
                  </p>

                  {quickHeroSubmitted ? (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                      <p className="text-xs font-bold text-emerald-900">Enquiry Received!</p>
                      <p className="text-[11px] text-emerald-700">We will call or WhatsApp you on {quickHeroPhone}.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleQuickHeroSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Suman Gupta"
                          value={quickHeroName}
                          onChange={e => setQuickHeroName(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={quickHeroPhone}
                          onChange={e => setQuickHeroPhone(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Service / Requirement</label>
                        <input
                          type="text"
                          placeholder="e.g. Delivery order, consultation slot"
                          value={quickHeroService}
                          onChange={e => setQuickHeroService(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="pt-2 flex flex-col gap-2">
                        <button
                          type="submit"
                          className="w-full py-2.5 text-xs font-bold text-white rounded-xl shadow-md transition-all cursor-pointer"
                          style={{ backgroundColor: palette.accentColor }}
                        >
                          Submit Enquiry Now
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDirectWhatsApp(`Hello ${site.businessName}! I want to enquire about ${quickHeroService || 'your services'}.`)}
                          className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Chat on WhatsApp Directly</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          ) : heroArchetype === 'product-showcase' ? (
            /* Product Showcase Hero: Left Headline, Right Featured Spotlight Card */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                {refSiteName && (
                  <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 backdrop-blur-xs border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Reference Style: <strong>{refSiteName}</strong></span>
                    {refSiteUrl && (
                      <a
                        href={refSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-amber-300 hover:text-white underline ml-1"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3 text-xs opacity-90 font-['Inter']">
                  <span className="font-bold uppercase tracking-wider text-[11px]" style={{ color: palette.accentColor }}>
                    {categoryTokens.name}
                  </span>
                  <span aria-hidden="true" className="opacity-50">·</span>
                  <span className="text-[11px] opacity-80">{designSig.typography.fontPairingLabel}</span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3 drop-shadow-md"
                  style={{ fontFamily: headlineFont }}
                >
                  {site.tagline || site.businessName}
                </h2>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 max-w-xl opacity-90 drop-shadow-xs" style={{ color: palette.textColor }}>
                  {site.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 font-['Inter']">
                  <button
                    onClick={() => {
                      const el = document.getElementById('catalog-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all min-h-[44px] flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    style={{ backgroundColor: palette.accentColor, color: '#ffffff' }}
                  >
                    <span>Browse Catalog ({(site.items || []).length} Items)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDirectWhatsApp()}
                    className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all min-h-[44px] flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Order</span>
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{site.openingHours}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span className="truncate max-w-[280px]">{site.address}</span>
                  </div>
                </div>
              </div>

              {/* Right: Featured Item Spotlight Card */}
              <div className="lg:col-span-5">
                {site.items && site.items.length > 0 && (
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 text-slate-900 group">
                    <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                      <img
                        src={site.items[0].imageUrl || site.coverUrl || site.logoUrl}
                        alt={site.items[0].name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                        Featured Highlight
                      </div>
                      {site.items[0].discountPrice && (
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-sm">
                          Special Rate
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="font-bold text-base text-slate-900 leading-tight">
                            {site.items[0].name}
                          </h4>
                          <span className="text-[11px] text-slate-500">{site.items[0].category}</span>
                        </div>
                        <div className="text-right shrink-0">
                          {site.items[0].discountPrice ? (
                            <div>
                              <span className="text-base font-extrabold text-emerald-600 font-mono">₹{site.items[0].discountPrice}</span>
                              <span className="text-xs text-slate-400 line-through ml-1 font-mono">₹{site.items[0].price}</span>
                            </div>
                          ) : (
                            <span className="text-base font-extrabold text-slate-900 font-mono">₹{site.items[0].price}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                        {site.items[0].description}
                      </p>
                      <button
                        onClick={() => {
                          setSelectedItemForLead(site.items[0]);
                          handleDirectWhatsApp(`Hello ${site.businessName}! I want to order the featured special: ${site.items[0].name} (₹${site.items[0].discountPrice || site.items[0].price})`);
                        }}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Order This Highlight on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Cinematic Overlay & Default Archetype */
            <div className="max-w-3xl">
              {refSiteName && (
                <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 backdrop-blur-xs border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Reference Style: <strong>{refSiteName}</strong></span>
                  {refSiteUrl && (
                    <a
                      href={refSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-amber-300 hover:text-white underline ml-1"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}

              <div className="flex items-center gap-2 mb-3 text-xs opacity-90 font-['Inter']">
                <span
                  className="font-bold uppercase tracking-wider text-[11px]"
                  style={{ color: palette.accentColor }}
                >
                  {categoryTokens.name}
                </span>
                <span aria-hidden="true" className="opacity-50">·</span>
                <span className="text-[11px] opacity-80">{designSig.typography.fontPairingLabel}</span>
                {site.specialBadge && (
                  <>
                    <span aria-hidden="true" className="opacity-50">·</span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold"
                      style={{
                        backgroundColor: palette.accentColor,
                        color: palette.baseBg
                      }}
                    >
                      ★ {site.specialBadge}
                    </span>
                  </>
                )}
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3 drop-shadow-md"
                style={{ fontFamily: headlineFont }}
              >
                {site.tagline || site.businessName}
              </h2>

              <p
                className="text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl opacity-90 drop-shadow-xs"
                style={{ color: palette.textColor }}
              >
                {site.description}
              </p>

              {/* Main Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 font-['Inter']">
                <button
                  onClick={() => {
                    const el = document.getElementById('booking-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all min-h-[44px] flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  style={{
                    backgroundColor: palette.accentColor,
                    color: ['#F5E6D3', '#FFF8EE', '#EDE6D6', '#C6F135', '#EFD9D3', '#F1F3F5', '#E4E7EC'].includes(palette.accentColor) ? '#14162B' : '#FFFFFF'
                  }}
                >
                  <span>{site.bookingCtaLabel || 'Book / Order Now'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('catalog-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold rounded-xl border border-white/25 transition-all min-h-[44px]"
                  style={{ color: palette.textColor }}
                >
                  Browse Price List ({(site.items || []).length})
                </button>
              </div>

              {/* Quick Timing & Location badges */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{site.openingHours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="truncate max-w-[280px] sm:max-w-md">{site.address}</span>
                </div>
                {site.deliveryRadius && (
                  <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{site.deliveryRadius}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Offers & Discounts Banner (if active) */}
      {isSectionEnabled('offers') && site.offers && site.offers.length > 0 && (
        <section className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white py-3.5 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm block">
                  {site.offers[0].title}
                </span>
                <span className="text-[11px] text-white/90">
                  {site.offers[0].description}
                </span>
              </div>
            </div>

            {site.offers[0].couponCode && (
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono font-bold bg-white text-slate-900 px-3 py-1.5 rounded-lg shadow-xs">
                  CODE: {site.offers[0].couponCode}
                </span>
                <button
                  onClick={() => handleDirectWhatsApp(`Hello! I want to claim offer: ${site.offers[0].title} with code ${site.offers[0].couponCode}`)}
                  className="px-3 py-1.5 bg-slate-950/80 hover:bg-slate-950 text-white text-xs font-bold rounded-lg transition-colors min-h-[36px]"
                >
                  Claim on WhatsApp
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Site Architecture & Type Tag Table */}
      <SiteTagTable site={site} />

      {/* Dynamic Booking Engine Section */}
      <section id="booking-section" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <CategoryBookingEngine
            site={site}
            selectedItem={selectedItemForLead}
            onSubmitLead={async (lead) => {
              await submitLead(lead);
            }}
            onDirectWhatsApp={handleDirectWhatsApp}
          />
        </div>
      </section>

      {/* Main Catalog & Price List Section (with Mobile Accordion Option) */}
      <section id="catalog-section" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {getSectionTitle('menu', 'Services, Rates & Products')}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Clear upfront rates in Indian Rupees (₹). Tap any item to book or order.
            </p>

            {/* Filter Tabs by Category */}
            {itemCategories.length > 1 && (
              <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all min-h-[36px] ${
                    activeCategory === 'all'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({site.items.length})
                </button>
                {itemCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all min-h-[36px] ${
                      activeCategory === cat
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Grouped or Filtered Items List */}
          <div className="space-y-8">
            {(activeCategory === 'all' ? itemCategories : [activeCategory]).map(catName => {
              const catItems = site.items.filter(i => i.category === catName);
              if (catItems.length === 0) return null;
              const isCollapsed = collapsedCategories[catName];

              return (
                <div key={catName} className="space-y-3">
                  {/* Category Accordion Header */}
                  <button
                    onClick={() => toggleCategoryCollapse(catName)}
                    className="w-full flex items-center justify-between py-2 px-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-left transition-colors cursor-pointer min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
                      <span className="font-bold text-xs sm:text-sm text-slate-900 capitalize">
                        {catName}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        ({catItems.length})
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isCollapsed ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {!isCollapsed && (
                    catalogStyle === 'dense-table' ? (
                      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                            <tr>
                              <th className="py-3 px-4">Item / Service</th>
                              <th className="py-3 px-4 hidden sm:table-cell">Specifications</th>
                              <th className="py-3 px-4">Price (₹)</th>
                              <th className="py-3 px-4 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {catItems.map(item => (
                              <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                                <td className="py-3 px-4">
                                  <div className="font-bold text-slate-900">{item.name}</div>
                                  <div className="text-[11px] text-slate-500 line-clamp-1">{item.description}</div>
                                </td>
                                <td className="py-3 px-4 hidden sm:table-cell text-slate-600 text-[11px]">
                                  {item.duration || item.specifications || item.turnaroundTime || item.unit || 'Standard'}
                                </td>
                                <td className="py-3 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                                  {item.discountPrice ? (
                                    <span>
                                      <span className="text-emerald-600">₹{item.discountPrice}</span>
                                      <span className="text-slate-400 line-through text-[10px] ml-1">₹{item.price}</span>
                                    </span>
                                  ) : (
                                    <span>₹{item.price}</span>
                                  )}
                                </td>
                                <td className="py-3 px-4 text-right whitespace-nowrap">
                                  <button
                                    onClick={() => {
                                      setSelectedItemForLead(item);
                                      handleDirectWhatsApp(`Hello ${site.businessName}! I want to order/inquire: ${item.name} (₹${item.discountPrice || item.price})`);
                                    }}
                                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1"
                                  >
                                    <MessageSquare className="w-3 h-3" />
                                    <span>Order</span>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                      {catItems.map(item => {
                        const hasDiscount = item.discountPrice && item.discountPrice < item.price;
                        return (
                          <div
                            key={item.id}
                            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all p-4 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-3 mb-1.5">
                                <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                                  {item.name}
                                </h4>
                                <div className="text-right shrink-0">
                                  {hasDiscount ? (
                                    <div>
                                      <span className="text-xs sm:text-sm font-extrabold text-emerald-600 font-mono-price">
                                        ₹{item.discountPrice}
                                      </span>
                                      <span className="text-[10px] text-slate-400 line-through ml-1 font-mono-price">
                                        ₹{item.price}
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono-price">
                                      ₹{item.price}
                                    </span>
                                  )}
                                  {item.unit && (
                                    <span className="text-[10px] text-slate-400 block font-normal">
                                      {item.unit}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-1 mb-1.5">
                                {item.duration && (
                                  <span className="inline-block text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                                    Duration: {item.duration}
                                  </span>
                                )}
                                {item.doctorQualification && (
                                  <span className="inline-block text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                                    {item.doctorQualification}
                                  </span>
                                )}
                                {item.specifications && (
                                  <span className="inline-block text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                                    {item.specifications}
                                  </span>
                                )}
                                {item.turnaroundTime && (
                                  <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                    {item.turnaroundTime}
                                  </span>
                                )}
                                {item.capacityDetails && (
                                  <span className="inline-block text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                                    {item.capacityDetails}
                                  </span>
                                )}
                              </div>

                              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-slate-100 mt-3 flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setSelectedItemForLead(item);
                                  handleDirectWhatsApp(
                                    `Hello ${site.businessName}! I want to order/book: ${item.name} (₹${item.discountPrice || item.price})`
                                  );
                                }}
                                className="flex-1 py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
                              >
                                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                                Order on WhatsApp
                              </button>

                              <button
                                onClick={() => {
                                  setSelectedItemForLead(item);
                                  const el = document.getElementById('booking-section');
                                  el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors min-h-[44px]"
                              >
                                Book
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {isSectionEnabled('gallery') && site.gallery && site.gallery.length > 0 && (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {getSectionTitle('gallery', 'Photos & Ambiance')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {site.gallery.map(img => (
                <div key={img.id} className="relative h-44 rounded-2xl overflow-hidden shadow-xs bg-slate-200">
                  <img src={img.imageUrl} alt={img.title || site.businessName} className="w-full h-full object-cover" />
                  {img.title && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5 text-white text-[11px] font-semibold">
                      {img.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hours & Maps Location */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  Location & Hours
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                  Visit {site.businessName}
                </h3>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{site.openingHours}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{site.address}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all min-h-[44px]"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Google Maps Directions
                </a>
                <button
                  onClick={() => setShowQrModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all min-h-[44px]"
                >
                  <QrCode className="w-3.5 h-3.5 text-indigo-600" />
                  Show Counter QR Code
                </button>
              </div>
            </div>

            <div className="h-60 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="Store Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address || site.businessName)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-white text-sm block">
              {site.businessName}
            </span>
            <span className="text-slate-400 text-[11px] block">
              {site.address} · {site.phone}
            </span>
            {refSiteName && (
              <div className="text-[11px] text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                <span>Reference Design: <strong className="text-slate-200">{refSiteName}</strong></span>
                {refSiteUrl && (
                  <a href={refSiteUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-0.5">
                    <span>Live</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button onClick={() => setShowQrModal(true)} className="hover:text-white">
              Scan QR
            </button>
            <span>·</span>
            <span>
              Powered by <button onClick={() => setActiveView('home')} className="text-indigo-400 hover:underline">RaoSitez</button>
            </span>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM MOBILE ACTION BAR (Thumb-Reachable 3-Action Bar) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden shadow-2xl pb-safe">
        <div className="grid grid-cols-3 gap-2">
          {/* Action 1: Call */}
          <a
            href={`tel:${cleanPhone}`}
            className="flex flex-col items-center justify-center py-2 px-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold rounded-xl min-h-[44px] transition-colors"
          >
            <Phone className="w-4 h-4 text-indigo-600 mb-0.5" />
            <span>Call</span>
          </a>

          {/* Action 2: WhatsApp */}
          <button
            onClick={() => handleDirectWhatsApp()}
            className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded-xl shadow-sm min-h-[44px] transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </button>

          {/* Action 3: Category Specific CTA */}
          <button
            onClick={() => {
              const el = document.getElementById('booking-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center justify-center py-2 px-1 text-white text-[10px] font-extrabold rounded-xl shadow-sm min-h-[44px] transition-colors cursor-pointer text-center leading-tight truncate"
            style={{ backgroundColor: site.primaryColor || '#4f46e5' }}
          >
            <Sparkles className="w-3.5 h-3.5 mb-0.5 shrink-0" />
            <span className="truncate w-full px-1">
              {getActionBookingLabel(site.bookingCtaLabel)}
            </span>
          </button>
        </div>
      </div>

      {/* Install App / Information Toast */}
      {installInfoMsg && (
        <div className="fixed bottom-20 inset-x-4 z-50 bg-slate-900 text-white text-xs py-3 px-4 rounded-xl shadow-xl border border-slate-700 max-w-md mx-auto flex items-center justify-between gap-3 animate-fade-in">
          <span>{installInfoMsg}</span>
          <button
            onClick={() => setInstallInfoMsg(null)}
            className="text-slate-400 hover:text-white font-bold p-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* QR Code Modal */}
      <QRCodeModal
        site={site}
        isOpen={showQrModal}
        onClose={() => setShowQrModal(false)}
      />
    </div>
  );
};
