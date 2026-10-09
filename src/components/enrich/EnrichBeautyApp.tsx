import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  Sparkles,
  Star,
  Users,
  Building,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Scissors,
  Droplets,
  Palette,
  ShieldCheck,
  Smartphone,
  Search,
  ChevronRight,
  ArrowLeft,
  Crown,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  Share2
} from 'lucide-react';
import { ENRICH_DATA, EnrichService, EnrichCity, EnrichBrand } from '../../data/enrich';
import { useApp } from '../../context/AppContext';

export const EnrichBeautyApp: React.FC = () => {
  const { setActiveView } = useApp();

  // Filter States
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<'all' | 'hair' | 'skin' | 'nails'>('all');
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [selectedBrandCategory, setSelectedBrandCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  // SEO Title & Meta Management
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Enrich Beauty — Book Salon Appointments & Professional Hair & Skin Care';
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const filteredCities = ENRICH_DATA.cities.filter(c =>
    c.name.toLowerCase().includes(citySearchQuery.toLowerCase()) ||
    c.popularAreas.some(area => area.toLowerCase().includes(citySearchQuery.toLowerCase()))
  );

  const filteredServices = ENRICH_DATA.services.filter(
    s => selectedServiceCategory === 'all' || s.category === selectedServiceCategory
  );

  const brandCategories = ['all', ...Array.from(new Set(ENRICH_DATA.brands.map(b => b.category)))];
  const filteredBrands = ENRICH_DATA.brands.filter(
    b => selectedBrandCategory === 'all' || b.category === selectedBrandCategory
  );

  const handleShare = () => {
    try {
      if (navigator.share) {
        navigator.share({
          title: 'Enrich Beauty — Book Salon & Hair Care',
          url: window.location.href
        });
      } else {
        navigator.clipboard?.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const getServiceIcon = (slug: string) => {
    if (slug.includes('cut')) return <Scissors className="w-5 h-5 text-[#f82148]" />;
    if (slug.includes('wash')) return <Droplets className="w-5 h-5 text-[#f82148]" />;
    if (slug.includes('colour')) return <Palette className="w-5 h-5 text-[#f82148]" />;
    if (slug.includes('kerastase') || slug.includes('treatments')) return <Crown className="w-5 h-5 text-[#f82148]" />;
    return <Sparkles className="w-5 h-5 text-[#f82148]" />;
  };

  return (
    <div className="min-h-screen bg-[#FDFBFB] text-[#1E2022] font-['Inter',sans-serif] selection:bg-[#f82148] selection:text-white">
      {/* 1. Global RaoSitez Quick-Back Bar */}
      <div className="bg-[#14162B] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('home')}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#f82148] font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to RaoSitez.in Home</span>
            </button>
            <span className="text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">
              Verified Salon & Beauty Chain Directory
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 hidden md:inline">
              Official Reference:
            </span>
            <a
              href="https://www.enrichbeauty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#f82148] hover:underline font-bold text-xs"
            >
              <span>enrichbeauty.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Enrich Beauty Top Utility Hotline Bar */}
      <div className="bg-white border-b border-slate-200 text-slate-600 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="tel:18002665300"
              className="inline-flex items-center gap-1.5 font-bold text-[#f82148] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Toll Free: 1800 266 5300</span>
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-500">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>Daily 9:00 AM – 9:00 PM</span>
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-emerald-700 font-medium">
              107 Salons Across 7 Cities
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href="https://wa.me/919339777777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
            <span className="text-slate-300">·</span>
            <a
              href="https://www.enrichbeauty.com/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f82148] hover:underline font-bold"
            >
              Membership Club
            </a>
            <span className="text-slate-300">·</span>
            <button
              onClick={handleShare}
              className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
            >
              <Share2 className="w-3 h-3" />
              <span>{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Tagline */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.enrichbeauty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                aria-label="Enrich Beauty Home"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#f82148] to-[#ff476d] flex items-center justify-center text-white shadow-md shadow-[#f82148]/20">
                  <span className="font-serif font-black text-xl tracking-tight">E</span>
                </div>
                <div>
                  <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#f82148] transition-colors">
                    enrich
                  </span>
                  <span className="text-2xl font-light tracking-tight text-[#f82148] ml-1">
                    beauty
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono -mt-1">
                    Salons · Skincare · Haircare
                  </p>
                </div>
              </a>
            </div>

            {/* In-Page Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
              <a
                href="#cities-section"
                className="hover:text-[#f82148] transition-colors py-1"
              >
                107 Salons
              </a>
              <a
                href="#services-section"
                className="hover:text-[#f82148] transition-colors py-1"
              >
                Services
              </a>
              <a
                href="#brands-section"
                className="hover:text-[#f82148] transition-colors py-1"
              >
                Luxury Brands
              </a>
              <a
                href="#membership-section"
                className="hover:text-[#f82148] transition-colors py-1"
              >
                Membership
              </a>
              <a
                href="#contact-section"
                className="hover:text-[#f82148] transition-colors py-1"
              >
                Contact & Apps
              </a>
            </nav>

            {/* Header Right Action Button */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.enrichbeauty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f82148] hover:bg-[#e0143a] active:bg-[#c90f33] text-white text-xs font-extrabold uppercase tracking-wider shadow-md shadow-[#f82148]/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148]"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* 4. Hero Section with Brand Accents */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-white to-white py-16 sm:py-24 border-b border-rose-100/60">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f82148]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none -ml-20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#f82148]/20 shadow-xs text-xs font-extrabold text-[#f82148]">
                <Sparkles className="w-3.5 h-3.5 text-[#f82148]" />
                <span>India’s Leading Unisex Salon & Beauty Destination</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Book a salon appointment or shop{' '}
                <span className="text-[#f82148] underline decoration-[#f82148]/30 decoration-wavy decoration-2">
                  professional hair
                </span>{' '}
                and skin care.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Experience world-class salon expertise across 107 premium salons in Mumbai, Ahmedabad, Bengaluru, Pune, Vadodara, Surat, and Indore. Consult with 2000+ certified beauty masters or shop verified hair & skin formulations.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="https://www.enrichbeauty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#f82148] hover:bg-[#e0143a] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#f82148]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148]"
                >
                  <span>Book Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="#cities-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148]"
                >
                  <MapPin className="w-4 h-4 text-[#f82148]" />
                  <span>Find a Salon</span>
                </a>

                <a
                  href="#membership-section"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-rose-50 hover:bg-rose-100/80 text-[#f82148] border border-rose-200 font-bold text-sm transition-colors"
                >
                  <Crown className="w-4 h-4" />
                  <span>Get Up to 30% Off</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Stats Bar */}
        <section className="bg-white border-b border-slate-200 py-8 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-rose-50/50 border border-rose-100/80">
                <div className="w-12 h-12 rounded-xl bg-[#f82148] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#f82148]/20">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    107
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Salons Nationwide
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-2xl bg-rose-50/50 border border-rose-100/80">
                <div className="w-12 h-12 rounded-xl bg-[#f82148] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#f82148]/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    7
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Major Cities
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-2xl bg-rose-50/50 border border-rose-100/80">
                <div className="w-12 h-12 rounded-xl bg-[#f82148] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#f82148]/20">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    2,000+
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Professionals
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-2xl bg-rose-50/50 border border-rose-100/80">
                <div className="w-12 h-12 rounded-xl bg-[#f82148] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#f82148]/20">
                  <Star className="w-6 h-6 fill-white text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-1">
                    <span>4.7★</span>
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    On 2L+ Google Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Salons by City Grid Section */}
        <section id="cities-section" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#f82148] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Store Locator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Salons by City
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Explore all 107 Enrich Beauty flagship salons across 7 vibrant Indian metropolitan centers.
                </p>
              </div>

              {/* City Filter / Search */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by city or locality..."
                  value={citySearchQuery}
                  onChange={e => setCitySearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#f82148]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredCities.map((city: EnrichCity) => (
                <div
                  key={city.slug}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg hover:border-[#f82148]/50 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[#f82148] text-xs font-black uppercase tracking-wider border border-rose-200">
                        {city.salonCount} {city.salonCount === 1 ? 'Salon' : 'Salons'}
                      </span>
                      <Building className="w-4 h-4 text-slate-400 group-hover:text-[#f82148] transition-colors" />
                    </div>

                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#f82148] transition-colors">
                      {city.name}
                    </h3>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Popular Neighborhoods
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {city.popularAreas.map(area => (
                          <span
                            key={area}
                            className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href={city.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-[#f82148] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148]"
                    >
                      <span>View {city.name} Salons</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Services Grid Section */}
        <section id="services-section" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#f82148] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Salon Services</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Signature Hair, Skin & Nail Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Delivered by master stylists and certified aestheticians using dermatologist-tested formulas and Parisian rituals.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                {(['all', 'hair', 'skin', 'nails'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedServiceCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                      selectedServiceCategory === cat
                        ? 'bg-white text-[#f82148] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat === 'all' ? 'All Services' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service: EnrichService) => (
                <div
                  key={service.slug}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 p-6 transition-all hover:shadow-md hover:border-[#f82148]/40 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white border border-rose-100 flex items-center justify-center shadow-xs">
                        {getServiceIcon(service.slug)}
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-[#f82148]">
                        {service.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#f82148] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f82148] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148] rounded-md"
                    >
                      <span>Book {service.name} on Enrich</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Luxury Brands Grid (Text/Logo-Free Cards as per prompt rules) */}
        <section id="brands-section" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#f82148] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <Crown className="w-3.5 h-3.5" />
                  <span>100% Authentic Professional Formulations</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Global Professional Beauty Brands
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Shop original salon formulations with guaranteed authenticity, straight from official brand partners.
                </p>
              </div>

              {/* Brand Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                {brandCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedBrandCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all capitalize cursor-pointer ${
                      selectedBrandCategory === cat
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Brands' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography-Driven Logo-Free Brand Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredBrands.map((brand: EnrichBrand) => (
                <div
                  key={brand.name}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-[#f82148] transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2 py-0.5 rounded">
                      {brand.category}
                    </span>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#f82148] transition-colors tracking-tight">
                      {brand.name}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {brand.highlight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-700 group-hover:text-[#f82148] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148] rounded-md py-1"
                    >
                      <span>Shop {brand.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Membership Club Section */}
        <section id="membership-section" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#14162B] via-[#1E2038] to-[#2B1B2D] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#f82148]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f82148] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Exclusive Loyalty Club</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {ENRICH_DATA.membership.tagline}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Join the Enrich Membership Club to enjoy instant member pricing on hair cuts, colors, spas, and skin treatments across all 107 salons in India.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {ENRICH_DATA.membership.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#f82148] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold text-rose-300 pt-2">
                    <span>✨ {ENRICH_DATA.membership.startingPrice}</span>
                    <span>·</span>
                    <span>⏳ {ENRICH_DATA.membership.validity}</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4 shrink-0 lg:w-72">
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    Membership Passes
                  </div>
                  <div className="text-2xl font-black text-white">
                    {ENRICH_DATA.membership.startingPrice}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Includes wallet credit, instant savings & points redemption.
                  </p>
                  <a
                    href={ENRICH_DATA.membership.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-xl bg-[#f82148] hover:bg-[#e0143a] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#f82148]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Join Membership
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Contact + App Download + Social Row */}
        <section id="contact-section" className="py-16 sm:py-20 bg-slate-50/70 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f82148]">
                Get in Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Customer Care & Mobile Apps
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Connect with our dedicated beauty concierge or manage bookings seamlessly on iOS and Android.
              </p>
            </div>

            {/* Contact Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#f82148] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Toll-Free Helpline</h3>
                <a
                  href={`tel:${ENRICH_DATA.contact.phone}`}
                  className="text-base font-black text-[#f82148] hover:underline block"
                >
                  {ENRICH_DATA.contact.tollFreeLabel}
                </a>
                <p className="text-xs text-slate-500">{ENRICH_DATA.contact.hours}</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">WhatsApp Concierge</h3>
                <a
                  href={ENRICH_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-black text-emerald-600 hover:underline block"
                >
                  {ENRICH_DATA.contact.whatsappDisplay}
                </a>
                <p className="text-xs text-slate-500">Quick slot availability & assistance</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Email Support</h3>
                <a
                  href={`mailto:${ENRICH_DATA.contact.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-[#f82148] hover:underline block"
                >
                  {ENRICH_DATA.contact.email}
                </a>
                <p className="text-xs text-slate-500">Feedback, franchises & corporate tie-ups</p>
              </div>
            </div>

            {/* Apps & Social Row */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
              {/* App download */}
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-base font-black text-slate-900">
                  Download the Enrich Salon App
                </h3>
                <p className="text-xs text-slate-500">
                  Book appointments, track loyalty points & earn exclusive app vouchers.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 justify-center md:justify-start">
                  <a
                    href={ENRICH_DATA.apps.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148]"
                  >
                    <Smartphone className="w-4 h-4 text-white" />
                    <span>App Store (iOS)</span>
                  </a>
                  <a
                    href={ENRICH_DATA.apps.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f82148]"
                  >
                    <Smartphone className="w-4 h-4 text-white" />
                    <span>Google Play (Android)</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 text-center md:text-right border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Follow Enrich Beauty
                </span>
                <div className="flex items-center gap-2 justify-center md:justify-end pt-1">
                  <a
                    href={ENRICH_DATA.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-pink-50 hover:text-pink-600 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Enrich Beauty Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={ENRICH_DATA.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Enrich Beauty Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={ENRICH_DATA.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 flex items-center justify-center transition-colors"
                    aria-label="Enrich Beauty YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={ENRICH_DATA.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors font-bold text-xs"
                    aria-label="Enrich Beauty X"
                  >
                    𝕏
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Enrich Dedicated Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white">enrich</span>
              <span className="text-xl font-light text-[#f82148]">beauty</span>
            </div>
            <p className="text-xs text-slate-400 text-center sm:text-right">
              {ENRICH_DATA.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Enrich Beauty. Recreated reference inside RaoSitez project.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.enrichbeauty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Official Website
              </a>
              <span>·</span>
              <a
                href="https://www.enrichbeauty.com/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Membership
              </a>
              <span>·</span>
              <button
                onClick={() => setActiveView('home')}
                className="hover:text-[#f82148] cursor-pointer"
              >
                RaoSitez Home
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
