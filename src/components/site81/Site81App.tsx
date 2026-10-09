import React, { useState, useEffect } from 'react';
import { Site81Header } from './Site81Header';
import { Site81HeroSearch } from './Site81HeroSearch';
import { Site81PropertyCard } from './Site81PropertyCard';
import { Site81PropertyGrid } from './Site81PropertyGrid';
import { Site81PropertyDetail } from './Site81PropertyDetail';
import { Site81DiscoverySection } from './Site81DiscoverySection';
import { Site81LuxuryCategories } from './Site81LuxuryCategories';
import { Site81JournalSection } from './Site81JournalSection';
import { Site81SellPropertyModal } from './Site81SellPropertyModal';
import { Site81AccountModal } from './Site81AccountModal';
import { Site81Footer } from './Site81Footer';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { LUXURY_PROPERTIES, PropertyListing, JOURNAL_ARTICLES, JournalArticle } from '../../data/site81Data';
import { site81Config } from '../../config/site81Config';
import { ArrowRight, Sparkles, Search, X, Check } from 'lucide-react';

interface Site81AppProps {
  onBackToHub?: () => void;
}

export const Site81App: React.FC<Site81AppProps> = ({ onBackToHub }) => {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<'home' | 'marketplace' | 'detail' | 'journal' | 'categories'>('home');
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);

  // User Preferences & State
  const [currency, setCurrency] = useState<string>('USD');
  const [unit, setUnit] = useState<'sqft' | 'sqm'>('sqft');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('valtierra_favorites_v1');
      return stored ? JSON.parse(stored) : ['prop-1', 'prop-2', 'prop-7'];
    } catch {
      return ['prop-1', 'prop-2', 'prop-7'];
    }
  });

  // Modal States
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [accountTab, setAccountTab] = useState<'login' | 'saved' | 'inquiries' | 'searches'>('login');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Search filter pass-through to marketplace
  const [filterQuery, setFilterQuery] = useState('');
  const [filterListingType, setFilterListingType] = useState<'sale' | 'rent' | 'new_development'>('sale');
  const [filterPropertyType, setFilterPropertyType] = useState('');
  const [filterMaxPriceUsd, setFilterMaxPriceUsd] = useState<number | undefined>(undefined);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('valtierra_favorites_v1', JSON.stringify(favorites));
    } catch (e) {
      console.warn('Could not save favorites', e);
    }
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNavigate = (view: string, propertySlugOrId?: string) => {
    if (view === 'marketplace') {
      setCurrentView('marketplace');
    } else if (view === 'journal') {
      setCurrentView('journal');
    } else if (view === 'categories') {
      setCurrentView('categories');
    } else if (view === 'home') {
      setCurrentView('home');
    }

    if (propertySlugOrId) {
      const found = LUXURY_PROPERTIES.find((p) => p.id === propertySlugOrId || p.slug === propertySlugOrId);
      if (found) {
        setSelectedProperty(found);
        setCurrentView('detail');
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProperty = (property: PropertyListing) => {
    setSelectedProperty(property);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (filters: {
    query: string;
    listingType: 'sale' | 'rent' | 'new_development';
    propertyType: string;
    maxPriceUsd?: number;
  }) => {
    setFilterQuery(filters.query);
    setFilterListingType(filters.listingType);
    setFilterPropertyType(filters.propertyType);
    setFilterMaxPriceUsd(filters.maxPriceUsd);
    setCurrentView('marketplace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (destName: string) => {
    setFilterQuery(destName);
    setCurrentView('marketplace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SEO Sync: Title, Meta, and JSON-LD Structured Data
  useEffect(() => {
    if (currentView === 'detail' && selectedProperty) {
      document.title = `${selectedProperty.title} | ${selectedProperty.city}, ${selectedProperty.country} | ${site81Config.BRAND_NAME}`;
    } else if (currentView === 'marketplace') {
      document.title = `Luxury Real Estate for Sale | Global Super-Prime Portfolios | ${site81Config.BRAND_NAME}`;
    } else if (currentView === 'journal') {
      document.title = `The Journal | Architecture, Design & Market Intelligence | ${site81Config.BRAND_NAME}`;
    } else if (currentView === 'categories') {
      document.title = `Luxury Asset Portfolios | Supercars, Yachts & Private Jets | ${site81Config.BRAND_NAME}`;
    } else {
      document.title = `${site81Config.BRAND_NAME} | ${site81Config.TAGLINE}`;
    }
  }, [currentView, selectedProperty]);

  // Featured 6 properties for Homepage
  const featuredProperties = LUXURY_PROPERTIES.slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* 1. Header Navigation */}
      <Site81Header
        currentView={currentView}
        onNavigate={handleNavigate}
        currency={currency}
        onSelectCurrency={setCurrency}
        unit={unit}
        onToggleUnit={() => setUnit(unit === 'sqft' ? 'sqm' : 'sqft')}
        favoritesCount={favorites.length}
        onOpenFavorites={() => {
          setAccountTab('saved');
          setAccountModalOpen(true);
        }}
        onOpenSellModal={() => setSellModalOpen(true)}
        onOpenAccountModal={(tab) => {
          setAccountTab(tab || 'login');
          setAccountModalOpen(true);
        }}
        onOpenSearchModal={() => setSearchModalOpen(true)}
      />

      {/* 2. Main Content Routing */}
      <main>
        {currentView === 'home' && (
          <div>
            {/* Hero Search Section */}
            <Site81HeroSearch
              onSearch={handleHeroSearch}
              onExploreAll={() => setCurrentView('marketplace')}
              currency={currency}
            />

            {/* Featured Luxury Residences Strip */}
            <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Curated International Portfolios</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-serif text-neutral-950 font-normal">
                    Featured Super-Prime Residences
                  </h2>
                  <p className="text-sm text-neutral-500 mt-2 max-w-2xl font-light">
                    Hand-selected estates, waterfront sanctuaries, and sky duplexes meeting the highest benchmarks of global architectural distinction.
                  </p>
                </div>

                <button
                  onClick={() => setCurrentView('marketplace')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-900 hover:text-amber-700 transition-colors self-start md:self-auto cursor-pointer"
                >
                  <span>View All {LUXURY_PROPERTIES.length} Properties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Grid of 6 Featured Properties */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {featuredProperties.map((property) => (
                  <Site81PropertyCard
                    key={property.id}
                    property={property}
                    currency={currency}
                    unit={unit}
                    isFavorite={favorites.includes(property.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onSelectProperty={handleSelectProperty}
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setCurrentView('marketplace')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer shadow-lg"
                >
                  <span>Explore Full Real Estate Marketplace</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Global Territorial Discovery (Top Countries, Cities, Regions) */}
            <Site81DiscoverySection
              onSelectDestination={handleSelectDestination}
              onExploreAll={() => setCurrentView('marketplace')}
            />

            {/* Core Multi-Asset Luxury Universe (Supercars, Yachts, Jets) */}
            <Site81LuxuryCategories
              onSelectRealEstate={() => setCurrentView('marketplace')}
              onOpenSellModal={() => setSellModalOpen(true)}
            />

            {/* The Journal Editorial Section */}
            <Site81JournalSection />
          </div>
        )}

        {currentView === 'marketplace' && (
          <Site81PropertyGrid
            initialSearchQuery={filterQuery}
            initialListingType={filterListingType}
            initialPropertyType={filterPropertyType}
            initialMaxPriceUsd={filterMaxPriceUsd}
            currency={currency}
            unit={unit}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectProperty={handleSelectProperty}
          />
        )}

        {currentView === 'detail' && selectedProperty && (
          <Site81PropertyDetail
            property={selectedProperty}
            currency={currency}
            unit={unit}
            isFavorite={favorites.includes(selectedProperty.id)}
            onToggleFavorite={handleToggleFavorite}
            onBack={() => setCurrentView('marketplace')}
            onSelectProperty={handleSelectProperty}
            onOpenSellModal={() => setSellModalOpen(true)}
          />
        )}

        {currentView === 'journal' && (
          <div className="pt-4">
            <Site81JournalSection />
          </div>
        )}

        {currentView === 'categories' && (
          <div className="pt-4">
            <Site81LuxuryCategories
              onSelectRealEstate={() => setCurrentView('marketplace')}
              onOpenSellModal={() => setSellModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* 3. Footer */}
      <Site81Footer
        onNavigate={handleNavigate}
        onOpenSellModal={() => setSellModalOpen(true)}
        currency={currency}
        onSelectCurrency={setCurrency}
      />

      {/* 4. Modals */}
      <Site81SellPropertyModal
        isOpen={sellModalOpen}
        onClose={() => setSellModalOpen(false)}
      />

      <Site81AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
        initialTab={accountTab}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={handleSelectProperty}
        currency={currency}
      />

      {/* Quick Search Dialog Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSearchModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-normal text-neutral-950 mb-3">
              Search Global Marketplace
            </h3>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search by city, country, or architectural style..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSearchModalOpen(false);
                    setCurrentView('marketplace');
                  }
                }}
                className="w-full pl-11 pr-4 py-3 text-base border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="text-neutral-400 font-mono py-1">Quick Suggestions:</span>
              {['Beverly Hills', 'Lake Como', 'Saint-Tropez', 'Palm Jumeirah', 'Waterfront', 'Alpine Chalet'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setFilterQuery(item);
                      setSearchModalOpen(false);
                      setCurrentView('marketplace');
                    }}
                    className="px-3 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 cursor-pointer"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. Multi-Site Reference Navigation Switcher */}
      <ReferenceSiteSwitcher currentSiteId="site-81-luxury-real-estate" />
    </div>
  );
};
