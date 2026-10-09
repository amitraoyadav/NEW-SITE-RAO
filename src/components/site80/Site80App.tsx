import React, { useState, useEffect } from 'react';
import { Site80Navbar } from './Site80Navbar';
import { Site80HeroSlider } from './Site80HeroSlider';
import { Site80EventsSection } from './Site80EventsSection';
import { Site80AtmosphereSection } from './Site80AtmosphereSection';
import { Site80PostEventGrid } from './Site80PostEventGrid';
import { Site80AboutPage } from './Site80AboutPage';
import { Site80MediaPage } from './Site80MediaPage';
import { Site80PostEventPage } from './Site80PostEventPage';
import { Site80VideosPage } from './Site80VideosPage';
import { Site80ContactPage } from './Site80ContactPage';
import { Site80Footer } from './Site80Footer';
import { Site80BookingModal } from './Site80BookingModal';
import { site80Config } from '../../config/site80Config';
import { UPCOMING_EVENTS } from '../../data/site80Data';
import { MessageCircle, Phone } from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';

interface Site80AppProps {
  onBackToHub?: () => void;
}

export const Site80App: React.FC<Site80AppProps> = ({ onBackToHub }) => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingEventTitle, setBookingEventTitle] = useState<string>('');

  const handleOpenBooking = (eventTitle?: string) => {
    setBookingEventTitle(eventTitle || UPCOMING_EVENTS[0].title);
    setBookingModalOpen(true);
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SEO Sync: Title, Meta, and JSON-LD Structured Data
  useEffect(() => {
    const originalTitle = document.title;
    const viewTitles: Record<string, string> = {
      home: `${site80Config.BRAND_NAME} | Luxury Nightclub & Lounge at The Suryaa New Delhi`,
      about: `About Us | ${site80Config.BRAND_NAME} — The Monochrome Legacy`,
      media: `Media Gallery | ${site80Config.BRAND_NAME} Photos`,
      'post-event': `Post Event Albums | Previous Event Memories at ${site80Config.BRAND_NAME}`,
      videos: `Videos & Aftermovies | Official Nightlife Footage | ${site80Config.BRAND_NAME}`,
      contact: `Contact & Location | The Suryaa Hotel | ${site80Config.BRAND_NAME}`
    };

    document.title = viewTitles[currentView] || viewTitles.home;

    return () => {
      document.title = originalTitle;
    };
  }, [currentView]);

  return (
    <div className="min-h-screen bg-black text-white font-['Inter'] flex flex-col selection:bg-[#FFD700] selection:text-black">
      {/* 1. Sticky Navigation Header */}
      <Site80Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onBackToHub={onBackToHub}
      />

      {/* 2. Main Page Views */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Full-width Hero Slider with Autoplay & Arrows */}
            <Site80HeroSlider
              onOpenBooking={() => handleOpenBooking()}
              onExploreEvents={() => {
                const el = document.getElementById('events-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else {
                  window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
                }
              }}
            />

            {/* This Week / Upcoming Events & Virtual Walk-Through Tabs */}
            <div id="events-section">
              <Site80EventsSection onOpenBooking={handleOpenBooking} />
            </div>

            {/* Club Atmosphere & Architectural Highlights */}
            <Site80AtmosphereSection
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
            />

            {/* Post Event Photo Albums Grid with White Slide-up Hover */}
            <Site80PostEventGrid />
          </>
        )}

        {currentView === 'about' && (
          <Site80AboutPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentView === 'media' && (
          <Site80MediaPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentView === 'post-event' && (
          <Site80PostEventPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentView === 'videos' && (
          <Site80VideosPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {currentView === 'contact' && (
          <Site80ContactPage onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {/* 3. Footer with Expandable Hours Strip & Quick Links */}
      <Site80Footer onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />

      {/* 4. Booking & Guestlist Modal */}
      <Site80BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultEventTitle={bookingEventTitle}
      />

      {/* 5. Floating Quick Action Concierge Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${site80Config.WHATSAPP}?text=Hi%20Club%20Noir%20Blanc%20Concierge%2C%20I%20would%20like%20to%20reserve%20a%20table%20tonight.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-black shadow-[0_4px_25px_rgba(37,211,102,0.6)] flex items-center justify-center hover:scale-110 hover:shadow-[0_6px_35px_rgba(37,211,102,0.9)] transition-all cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current text-black group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* 6. Multi-Site Reference Navigation */}
      <ReferenceSiteSwitcher currentSiteId="site-80-club-bw" />
    </div>
  );
};
