import { BusinessWebsite } from '../types';

export interface RealEstateProperty {
  id: string;
  title: string;
  slug: string;
  code: string;
  sector: string;
  block?: string;
  societyName?: string;
  address: string;
  mapEmbedUrl: string;
  latitude: number;
  longitude: number;
  propertyType: 'Builder Floor' | 'Society Flat' | 'Commercial' | 'Plot';
  area: number; // in sq.ft
  areaYards?: number; // in sq.yards
  price: number; // in INR
  pricePerSqFt: number;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  parking: number;
  lift: boolean;
  facing: string;
  roadWidth: number; // in feet
  floorNumber: number | string;
  totalFloors: number;
  propertyAge: string;
  constructionStatus: string;
  possession: string;
  ownership: string;
  registry: boolean;
  loanAvailable: boolean;
  purpose: 'Sale' | 'Rent';
  description: string;
  amenities: string[];
  nearbySchools: string[];
  nearbyMetro: string[];
  nearbyHospitals: string[];
  nearbyMalls: string[];
  nearbyMarkets: string[];
  videoLink?: string;
  tour360Url?: string;
  featuredImage: string;
  gallery: string[];
  isFeatured: boolean;
  isSold: boolean;
  isActive: boolean;
  viewsCount: number;
  createdAt: string;
  metaTitle: string;
  metaDescription?: string;
}

export interface DwarkaSectorInfo {
  sector: string;
  name: string;
  category: 'Premium Builder Floors' | 'CGHS Societies' | 'DDA Pocket Hub' | 'Commercial & Metro' | 'Upcoming / Institutional';
  metroStation: string;
  distanceToAirport: string;
  avgPriceSqFt: string;
  rentalDemand: 'Very High' | 'High' | 'Moderate';
  activeListingsCount: number;
  highlights: string[];
  description: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readingTime: number;
  category: string;
  featuredImage: string;
  content: string[];
  tags: string[];
}

export const PHONE_NUMBER = '+91 97169 71670';
export const WHATSAPP_NUMBER = '919716971670';
export const OFFICE_ADDRESS = 'Plot No. 153, Block B, Sector 8 Dwarka, New Delhi 110077';
export const EMAIL_ADDRESS = 'connect@choudharyrealestate.com';
export const GOVT_REG_ID = 'UDYAM-DL-03-0063015';

// All Verified Properties in Dwarka
export const CHOUDHARY_PROPERTIES: RealEstateProperty[] = [
  {
    id: 'prop-1',
    title: '3 BHK Luxury Builder Floor - Sector 8 Block B',
    slug: '3-bhk-luxury-builder-floor-sector-8-block-b',
    code: 'CRE-SALE-802',
    sector: 'Sector 8',
    block: 'B Block',
    address: 'B Block, Sector 8 Dwarka, New Delhi 110077',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0647895!3d28.5671212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%208%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5676,
    longitude: 77.0653,
    propertyType: 'Builder Floor',
    area: 1125,
    areaYards: 125,
    price: 19000000,
    pricePerSqFt: 16889,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    parking: 1,
    lift: true,
    facing: 'East',
    roadWidth: 30,
    floorNumber: 3,
    totalFloors: 4,
    propertyAge: 'New Construction',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Spacious luxury 3 BHK Builder Floor for sale in Sector 8 B Block, Dwarka. Plot Size: 125 Sq Yards. 3rd floor with private Schindler Lift & dedicated stilt car parking. Bank Loan Approved by SBI & HDFC. Complete legal scrutiny verified with 30-year chain registry.',
    amenities: [
      'Designer Modular Kitchen',
      'Branded Chimney & Gas Hob',
      'Italian Marble / Vitrified Tile Flooring',
      'Designer POP False Ceiling with LED Cob Lights',
      'Full-Height Wooden Wardrobes',
      'Luxury Jaquar / Kohler Sanitaryware',
      'Smart Digital Biometric Door Lock',
      'IGL Piped Natural Gas (PNG)',
      '24x7 Dual Water Supply (DJB & Borewell)',
      'Stilt Car Parking with EV Charging Provision'
    ],
    nearbySchools: ['Vandana International School', 'Delhi Public School Dwarka'],
    nearbyMetro: ['Sector 8 Metro Station (350m)'],
    nearbyHospitals: ['Manipal Hospital Dwarka', 'Ayushman Hospital'],
    nearbyMalls: ['Vegas Mall Sector 14', 'Pacific D21 Mall'],
    nearbyMarkets: ['Sector 8 Main DDA Market'],
    videoLink: 'https://youtu.be/6KnFXHTZe_0',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 380,
    createdAt: '2026-08-15T00:00:00Z',
    metaTitle: '3 BHK Luxury Builder Floor for Sale Sector 8 B Block Dwarka - ₹1.90 Cr'
  },
  {
    id: 'prop-2',
    title: '2 BHK Builder Floor for Rent - Sector 8 Block C',
    slug: '2-bhk-builder-floor-rent-sector-8-block-c',
    code: 'CRE-RENT-801',
    sector: 'Sector 8',
    block: 'C Block',
    address: 'C Block, Sector 8 Dwarka, New Delhi 110077',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0647895!3d28.5671212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%208%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5672,
    longitude: 77.0649,
    propertyType: 'Builder Floor',
    area: 648,
    areaYards: 72,
    price: 22000,
    pricePerSqFt: 34,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    parking: 1,
    lift: true,
    facing: 'North-East',
    roadWidth: 20,
    floorNumber: 2,
    totalFloors: 4,
    propertyAge: 'New Construction',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold',
    registry: true,
    loanAvailable: false,
    purpose: 'Rent',
    description: '2 BHK Builder Floor available for Rent in Sector 8 C Block, Dwarka. Plot Size: 72 Sq Yards. 2nd floor with Lift & Car Parking. Rent: ₹22,000/month. Terms: 1 month security deposit & 1 month advance. Ideal for working professionals or small family.',
    amenities: [
      'Designer Modular Kitchen',
      'Italian Marble / Vitrified Tile Flooring',
      'Designer POP False Ceiling with LED Cob Lights',
      'Full-Height Wooden Wardrobes',
      'Luxury Jaquar / Kohler Sanitaryware',
      'IGL Piped Natural Gas (PNG)',
      '24x7 Dual Water Supply (DJB & Borewell)',
      'Video Door Phone & Intercom'
    ],
    nearbySchools: ['Delhi Public School Dwarka'],
    nearbyMetro: ['Sector 8 Metro Station (400m)'],
    nearbyHospitals: ['Manipal Hospital'],
    nearbyMalls: ['Vegas Mall'],
    nearbyMarkets: ['Sector 8 Market'],
    videoLink: '',
    featuredImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 165,
    createdAt: '2026-08-12T00:00:00Z',
    metaTitle: '2 BHK Builder Floor for Rent Sector 8 C Block Dwarka - ₹22,000/mo'
  },
  {
    id: 'prop-akshardham-1',
    title: '2 BHK Redeveloped Independent Floor - Akshardham Apartments Sector 19 Dwarka',
    slug: '2-bhk-redeveloped-floor-akshardham-apartments-sector-19-dwarka',
    code: 'CRE-AKSH-201',
    sector: 'Sector 19',
    societyName: 'Akshardham Apartments',
    block: 'Pocket 3',
    address: 'Pocket 3, Akshardham Apartments, Sector 19 Dwarka, New Delhi 110075',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0547895!3d28.5771212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%2019%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5776,
    longitude: 77.0553,
    propertyType: 'Builder Floor',
    area: 680,
    areaYards: 75,
    price: 8500000,
    pricePerSqFt: 12500,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    parking: 1,
    lift: true,
    facing: 'North-East',
    roadWidth: 30,
    floorNumber: 2,
    totalFloors: 4,
    propertyAge: 'Newly Redeveloped',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Newly redeveloped 2 BHK Independent Builder Floor in Akshardham Apartments Pocket 3 Sector 19 Dwarka. 500m walking distance to Sector 11 Metro Station. Features modular kitchen, stilt parking, Otis automatic lift, IGL PNG connection, and 100% freehold registry title.',
    amenities: [
      'Designer Modular Kitchen',
      'Branded Chimney & Gas Hob',
      'Italian Marble / Vitrified Tile Flooring',
      'Designer POP False Ceiling with LED Cob Lights',
      'Full-Height Wooden Wardrobes',
      'Luxury Jaquar / Kohler Sanitaryware',
      'Smart Digital Biometric Door Lock',
      'IGL Piped Natural Gas (PNG)'
    ],
    nearbySchools: ['Sri Venkateshwar International School', 'Bal Bharati Public School'],
    nearbyMetro: ['Dwarka Sector 11 Metro Station (500m)'],
    nearbyHospitals: ['Venkateshwar Hospital Sector 18'],
    nearbyMalls: ['Vegas Mall Sector 14'],
    nearbyMarkets: ['Pocket 3 DDA Market'],
    videoLink: 'https://youtu.be/6KnFXHTZe_0',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 420,
    createdAt: '2026-08-20T00:00:00Z',
    metaTitle: '2 BHK Independent Floor for Sale Akshardham Apartments Sector 19 Dwarka - ₹85 Lakh'
  },
  {
    id: 'prop-akshardham-2',
    title: '2 BHK Original DDA Apartment - Akshardham Apartments Sector 19 Dwarka',
    slug: '2-bhk-dda-apartment-akshardham-apartments-sector-19-dwarka',
    code: 'CRE-AKSH-202',
    sector: 'Sector 19',
    societyName: 'Akshardham Apartments',
    block: 'Pocket 3',
    address: 'Pocket 3, Akshardham Apartments, Sector 19 Dwarka, New Delhi 110075',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0547895!3d28.5771212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%2019%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5772,
    longitude: 77.055,
    propertyType: 'Society Flat',
    area: 1150,
    price: 13500000,
    pricePerSqFt: 11739,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    parking: 1,
    lift: true,
    facing: 'East',
    roadWidth: 30,
    floorNumber: 3,
    totalFloors: 4,
    propertyAge: 'Resale DDA Flat',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Spacious 2 BHK Original DDA Apartment for sale in Akshardham Apartments Pocket 3 Sector 19 Dwarka. 1,150 sq. ft. super area, 3rd floor with lift access and dedicated park facing balconies. Freehold title with original DDA allotment deed.',
    amenities: [
      'Designer Modular Kitchen',
      'Italian Marble / Vitrified Tile Flooring',
      'Designer POP False Ceiling with LED Cob Lights',
      'Full-Height Wooden Wardrobes',
      'Luxury Jaquar / Kohler Sanitaryware',
      '24x7 Gated Security Guard',
      '24x7 Dual Water Supply (DJB & Borewell)',
      'Park Facing / Green Belt View'
    ],
    nearbySchools: ['Sri Venkateshwar International School'],
    nearbyMetro: ['Dwarka Sector 11 Metro Station (500m)'],
    nearbyHospitals: ['Venkateshwar Hospital'],
    nearbyMalls: ['Vegas Mall'],
    nearbyMarkets: ['Pocket 3 Local Market'],
    videoLink: 'https://youtu.be/6KnFXHTZe_0',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 310,
    createdAt: '2026-08-18T00:00:00Z',
    metaTitle: '2 BHK DDA Flat for Sale Akshardham Apartments Sector 19 Dwarka - ₹1.35 Cr',
  },
  {
    id: 'prop-akshardham-3',
    title: '3 BHK Spacious Apartment - Akshardham Apartments Sector 19 Dwarka',
    slug: '3-bhk-spacious-apartment-akshardham-apartments-sector-19-dwarka',
    code: 'CRE-AKSH-301',
    sector: 'Sector 19',
    societyName: 'Akshardham Apartments',
    block: 'Pocket 3',
    address: 'Pocket 3, Akshardham Apartments, Sector 19 Dwarka, New Delhi 110075',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0547895!3d28.5771212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%2019%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5778,
    longitude: 77.0558,
    propertyType: 'Society Flat',
    area: 1480,
    price: 18500000,
    pricePerSqFt: 12500,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    parking: 2,
    lift: true,
    facing: 'North-East',
    roadWidth: 30,
    floorNumber: 1,
    totalFloors: 4,
    propertyAge: 'Renovated Premium',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Premium renovated 3 BHK Apartment in Akshardham Apartments Sector 19 Dwarka. 1,480 sq. ft. super area, 1st floor with lift, stilt parking for 2 cars, Italian marble living room, and direct access to Sector 11 Metro.',
    amenities: [
      'Designer Modular Kitchen',
      'Branded Chimney & Gas Hob',
      'Italian Marble / Vitrified Tile Flooring',
      'Designer POP False Ceiling with LED Cob Lights',
      'Full-Height Wooden Wardrobes',
      'Luxury Jaquar / Kohler Sanitaryware',
      'Glass Shower Partition',
      'Video Door Phone & Intercom',
      'IGL Piped Natural Gas (PNG)'
    ],
    nearbySchools: ['Sri Venkateshwar International School'],
    nearbyMetro: ['Dwarka Sector 11 Metro Station (500m)'],
    nearbyHospitals: ['Venkateshwar Hospital'],
    nearbyMalls: ['Vegas Mall'],
    nearbyMarkets: ['Pocket 3 Market'],
    videoLink: 'https://youtu.be/6KnFXHTZe_0',
    featuredImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 510,
    createdAt: '2026-08-22T00:00:00Z',
    metaTitle: '3 BHK Apartment for Sale Akshardham Apartments Sector 19 Dwarka - ₹1.85 Cr'
  },
  {
    id: 'prop-sector11-luxury',
    title: '4 BHK Ultra-Luxury Independent Builder Floor - Sector 11 Dwarka',
    slug: '4-bhk-ultra-luxury-builder-floor-sector-11-dwarka',
    code: 'CRE-SALE-1104',
    sector: 'Sector 11',
    block: 'Pocket 2',
    address: 'Pocket 2, Near Metro Station, Sector 11 Dwarka, New Delhi 110075',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0547895!3d28.5771212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%2011%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5830,
    longitude: 77.0570,
    propertyType: 'Builder Floor',
    area: 2250,
    areaYards: 250,
    price: 32500000,
    pricePerSqFt: 14444,
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    parking: 2,
    lift: true,
    facing: 'North',
    roadWidth: 45,
    floorNumber: 4,
    totalFloors: 4,
    propertyAge: 'Brand New Construction',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Top-tier 4 BHK Independent Builder Floor with private landscaped terrace garden in Sector 11 Dwarka. 250 Sq Yards, 4th floor with private lift card access, 2 reserved stilt parking bays, imported German kitchen fittings, and 300m walking distance to Blue Line Metro.',
    amenities: [
      'Private Terrace Garden with Pergola & Gazebo',
      'Imported German Modular Kitchen with Island Counter',
      'Italian Statuario Marble Flooring',
      'Mitsubishi VRV Central Air-Conditioning',
      'All 4 Bedrooms with Attached Bathrooms & Walk-in Closets',
      'Schindler 6-Passenger Automatic Lift',
      '2 Dedicated Stilt Car Parking Slots',
      'Smart Home Automation with Alexa Integration',
      'IGL PNG & 24x7 Water Supply'
    ],
    nearbySchools: ['Modern Convent School', 'Venkateshwar International School'],
    nearbyMetro: ['Dwarka Sector 11 Metro Station (300m)'],
    nearbyHospitals: ['Venkateshwar Super Speciality Hospital'],
    nearbyMalls: ['Sector 11 HL Plaza', 'Vegas Mall'],
    nearbyMarkets: ['Sector 11 Central Market'],
    videoLink: 'https://youtu.be/6KnFXHTZe_0',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 680,
    createdAt: '2026-08-25T00:00:00Z',
    metaTitle: '4 BHK Luxury Builder Floor with Terrace Sector 11 Dwarka - ₹3.25 Cr'
  },
  {
    id: 'prop-cghs-sector22',
    title: '3 BHK Ready to Move Society Flat - Nav Sansad Vihar CGHS Sector 22 Dwarka',
    slug: '3-bhk-nav-sansad-vihar-cghs-sector-22-dwarka',
    code: 'CRE-CGHS-2201',
    sector: 'Sector 22',
    societyName: 'Nav Sansad Vihar CGHS',
    block: 'Plot 4',
    address: 'Plot 4, Sector 22 Dwarka, New Delhi 110077',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0547895!3d28.5771212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%2022%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5520,
    longitude: 77.0580,
    propertyType: 'Society Flat',
    area: 1650,
    price: 21000000,
    pricePerSqFt: 12727,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    parking: 1,
    lift: true,
    facing: 'North-East',
    roadWidth: 45,
    floorNumber: 5,
    totalFloors: 8,
    propertyAge: 'Well Maintained CGHS',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Elegantly crafted 3 BHK + Servant Room in prime Nav Sansad Vihar CGHS Sector 22 Dwarka. Gated community with 24x7 security, clubhouse, power backup, high-speed Otis lifts, landscaped kids play area, and proximity to Golf Course and Yashobhoomi IICC.',
    amenities: [
      'Gated Security with RFID Vehicle Boom Barriers',
      '100% DG Power Backup for Common Areas & Flat',
      'Clubhouse with Badminton Court & Gym',
      'Park Facing Corner Unit with Abundant Sunlight',
      'Covered Basement Reserved Car Parking',
      'Piped Natural Gas (IGL PNG)',
      'Intercom & 24x7 CCTV Surveillance'
    ],
    nearbySchools: ['Mount Carmel School', 'St. Mary’s School Sector 19'],
    nearbyMetro: ['Dwarka Sector 21 Metro Interchange (Airport Express)'],
    nearbyHospitals: ['Artemis Hospital Dwarka Clinic'],
    nearbyMalls: ['Pacific D21 Mall Sector 21'],
    nearbyMarkets: ['Sector 22 DDA Market'],
    videoLink: 'https://youtu.be/6KnFXHTZe_0',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 440,
    createdAt: '2026-08-24T00:00:00Z',
    metaTitle: '3 BHK Nav Sansad Vihar CGHS Flat Sector 22 Dwarka - ₹2.10 Cr'
  },
  {
    id: 'prop-commercial-vegas',
    title: 'Commercial High-Street Retail Shop - Sector 14 Vegas Mall Vicinity',
    slug: 'commercial-retail-shop-sector-14-dwarka-vegas-mall',
    code: 'CRE-COMM-1401',
    sector: 'Sector 14',
    block: 'Main Commercial Belt',
    address: 'Near Vegas Mall & Metro, Sector 14 Dwarka, New Delhi 110078',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0347895!3d28.5971212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%2014%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5980,
    longitude: 77.0320,
    propertyType: 'Commercial',
    area: 380,
    price: 14500000,
    pricePerSqFt: 38157,
    bedrooms: 0,
    bathrooms: 1,
    balconies: 0,
    parking: 1,
    lift: true,
    facing: 'North',
    roadWidth: 60,
    floorNumber: 'Ground Floor',
    totalFloors: 3,
    propertyAge: 'New Commercial Complex',
    constructionStatus: 'Ready to Move',
    possession: 'Immediate',
    ownership: 'Freehold Commercial',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Prime ground-floor high-street commercial retail shop situated directly opposite Vegas Mall in Sector 14 Dwarka. Tremendous daily footfall from Sector 14 Metro Station and GGSIPU University campus. Ideal for chemist, boutique cafe, salon, or branded electronics outlet.',
    amenities: [
      'Ground Floor Prime Road Frontage (18 ft Front Glass Display)',
      'High Footfall Commercial Plaza with Direct Metro Footbridge',
      'Dedicated Surface & Basement Customer Parking',
      'Central Fire Fighting & 100% Power Backup',
      'High Rental Yield (Expected Rent: ₹65,000 - ₹75,000/month)',
      'Freehold Commercial Registry with Clear DDA Title'
    ],
    nearbySchools: ['Guru Gobind Singh Indraprastha University (GGSIPU)'],
    nearbyMetro: ['Dwarka Sector 14 Metro Station (150m)'],
    nearbyHospitals: ['Venkateshwar Hospital'],
    nearbyMalls: ['Vegas Mall (Directly Opposite)'],
    nearbyMarkets: ['Sector 14 Commercial District'],
    videoLink: 'https://youtu.be/6KnFXHTZe_0',
    featuredImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 390,
    createdAt: '2026-08-26T00:00:00Z',
    metaTitle: 'Commercial Retail Shop for Sale Sector 14 Vegas Mall Dwarka - ₹1.45 Cr'
  },
  {
    id: 'prop-plot-sector23',
    title: 'Freehold Residential Plot - Sector 23 Extension Dwarka',
    slug: 'freehold-residential-plot-sector-23-dwarka',
    code: 'CRE-PLOT-2301',
    sector: 'Sector 23',
    block: 'Block A',
    address: 'Block A, Near Pochanpur & Sector 23 Golf Course, Dwarka, New Delhi 110077',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0447895!3d28.5471212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%2023%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    latitude: 28.5480,
    longitude: 77.0490,
    propertyType: 'Plot',
    area: 1350,
    areaYards: 150,
    price: 28000000,
    pricePerSqFt: 20740,
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    parking: 0,
    lift: false,
    facing: 'North-East',
    roadWidth: 40,
    floorNumber: 'Plot',
    totalFloors: 4,
    propertyAge: 'Vacant Freehold Plot',
    constructionStatus: 'Ready for Construction (G+4 Approved)',
    possession: 'Immediate',
    ownership: 'Freehold Clear Title',
    registry: true,
    loanAvailable: true,
    purpose: 'Sale',
    description: 'Rare opportunity to acquire a 150 Sq Yards Freehold Residential Plot in Sector 23 Extension Dwarka. Wide 40-foot road, North-East Vastu facing, DJB water line connected, and clear MCD building sanctions for Stilt + 4 Floors construction.',
    amenities: [
      'Approved for Stilt + 4 Independent Floors Construction',
      'Wide 40-Foot Front Metal Road',
      '100% Freehold Title with Direct Sub-Registrar Registry',
      'DJB Piped Water & BSES Electricity Line Available',
      'Near Upcoming Dwarka International Golf Course & Yashobhoomi',
      'Bank Loan Eligible from SBI & HDFC'
    ],
    nearbySchools: ['Nirmal Bhartia School', 'Paramount International School'],
    nearbyMetro: ['Dwarka Sector 21 Metro (Airport Express)'],
    nearbyHospitals: ['Manipal Hospital'],
    nearbyMalls: ['Pacific D21 Mall'],
    nearbyMarkets: ['Sector 23 DDA Commercial Complex'],
    videoLink: '',
    featuredImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    ],
    isFeatured: true,
    isSold: false,
    isActive: true,
    viewsCount: 290,
    createdAt: '2026-08-28T00:00:00Z',
    metaTitle: '150 Sq Yards Freehold Residential Plot Sector 23 Dwarka - ₹2.80 Cr'
  }
];

// Dwarka Sectors Directory
export const DWARKA_SECTORS: DwarkaSectorInfo[] = [
  {
    sector: 'Sector 8',
    name: 'Sector 8 Dwarka',
    category: 'Premium Builder Floors',
    metroStation: 'Sector 8 Metro Station (Blue Line)',
    distanceToAirport: '15 Mins via Underpass',
    avgPriceSqFt: '₹14,500 – ₹18,000 / sq.ft',
    rentalDemand: 'Very High',
    activeListingsCount: 38,
    highlights: ['Headquarters of Choudhary Realestate', 'Spacious 125 & 150 Sq Yd Floors', 'Wide 30ft–40ft Roads', 'Proximity to Vandana & DPS Schools'],
    description: 'Sector 8 is one of the most coveted builder floor hubs in Dwarka, offering independent floors with stilt parking, private lifts, and quick access to the Blue Line Metro.'
  },
  {
    sector: 'Sector 11',
    name: 'Sector 11 Dwarka',
    category: 'Premium Builder Floors',
    metroStation: 'Sector 11 Metro Station (Blue Line)',
    distanceToAirport: '18 Mins',
    avgPriceSqFt: '₹15,000 – ₹21,000 / sq.ft',
    rentalDemand: 'Very High',
    activeListingsCount: 42,
    highlights: ['Vibrant Central HL Plaza & Markets', 'Redeveloped Luxury Floors', 'Walking distance to Metro', 'Venkateshwar Hospital nearby'],
    description: 'Renowned for bustling markets, lifestyle amenities, and prime newly built independent builder floors within 300 meters of the metro station.'
  },
  {
    sector: 'Sector 12',
    name: 'Sector 12 Dwarka',
    category: 'CGHS Societies',
    metroStation: 'Sector 12 Metro Station (Blue Line)',
    distanceToAirport: '20 Mins',
    avgPriceSqFt: '₹12,500 – ₹16,500 / sq.ft',
    rentalDemand: 'High',
    activeListingsCount: 35,
    highlights: ['City Centre Commercial Hub', 'Established CGHS Societies', 'DDA Sports Complex nearby', 'Excellent road connectivity'],
    description: 'The geographic and commercial heart of Dwarka, featuring established cooperative group housing societies, lush green parks, and the famous City Centre.'
  },
  {
    sector: 'Sector 19',
    name: 'Sector 19 Dwarka',
    category: 'DDA Pocket Hub',
    metroStation: 'Sector 11 & Sector 10 Metro Stations',
    distanceToAirport: '16 Mins',
    avgPriceSqFt: '₹11,500 – ₹14,500 / sq.ft',
    rentalDemand: 'High',
    activeListingsCount: 29,
    highlights: ['Akshardham Apartments Pocket 3', 'Peaceful Residential Enclaves', 'Abundant parks & walking tracks', 'Reputed international schools'],
    description: 'Favored by families and government officers for its serene, green environment, DDA pocket flats, and newly redeveloped independent builder floors.'
  },
  {
    sector: 'Sector 22',
    name: 'Sector 22 Dwarka',
    category: 'CGHS Societies',
    metroStation: 'Sector 21 Metro Interchange',
    distanceToAirport: '10 Mins via Tunnel',
    avgPriceSqFt: '₹13,500 – ₹17,500 / sq.ft',
    rentalDemand: 'Very High',
    activeListingsCount: 45,
    highlights: ['Luxury CGHS Societies like Nav Sansad & Dream', 'Adjacent to International Golf Course', 'Fast access to Airport Express', 'Modern multi-level security'],
    description: 'Home to some of Dwarka’s finest gated housing societies, offering extensive club amenities, power backup, and picturesque golf course views.'
  },
  {
    sector: 'Sector 23',
    name: 'Sector 23 Dwarka',
    category: 'Premium Builder Floors',
    metroStation: 'Sector 21 Metro Station',
    distanceToAirport: '12 Mins',
    avgPriceSqFt: '₹14,000 – ₹19,000 / sq.ft',
    rentalDemand: 'High',
    activeListingsCount: 31,
    highlights: ['Freehold Plot Enclaves', 'Dwarka Expressway Connectivity', 'Spacious Independent Houses', 'Upcoming Bharat Vandana Park'],
    description: 'Boasts freehold plotted developments, peaceful surroundings, and rapid capital appreciation due to its proximity to the Dwarka Expressway and Yashobhoomi IICC.'
  },
  {
    sector: 'Sector 14',
    name: 'Sector 14 Dwarka',
    category: 'Commercial & Metro',
    metroStation: 'Sector 14 Metro Station',
    distanceToAirport: '22 Mins',
    avgPriceSqFt: '₹22,000 – ₹45,000 / sq.ft (Commercial)',
    rentalDemand: 'Very High',
    activeListingsCount: 24,
    highlights: ['Vegas Mall & Cinepolis', 'GGSIPU & National Law University', 'High Footfall Retail & Offices', 'Direct Blue Line Metro Access'],
    description: 'The premier shopping, entertainment, and commercial destination in Dwarka, anchored by Vegas Mall and prominent national educational institutions.'
  },
  {
    sector: 'Sector 7',
    name: 'Sector 7 Dwarka',
    category: 'DDA Pocket Hub',
    metroStation: 'Sector 9 & Sector 8 Metro',
    distanceToAirport: '15 Mins',
    avgPriceSqFt: '₹13,000 – ₹17,000 / sq.ft',
    rentalDemand: 'High',
    activeListingsCount: 27,
    highlights: ['Famous Rampal Chowk Market', 'Established Community Amenities', 'High Rental Incomes', 'Dense Commercial High Street'],
    description: 'Known across West Delhi for the lively Rampal Chowk shopping street, great medical clinics, and steady rental returns on builder floors.'
  }
];

// FAQs from Reference Website
export const CHOUDHARY_FAQS = [
  {
    q: 'Where is the registered office of Choudhary Realestate?',
    a: 'Our registered office is located at Plot No. 153, Block B, Sector 8 Dwarka, New Delhi - 110077. We are open 7 days a week from 9:00 AM to 8:00 PM for walk-in consultations and guided site visits.'
  },
  {
    q: 'What is your brokerage fee structure?',
    a: 'We operate on strict professional ethics with a standard, transparent 1% brokerage fee on Sale transactions and 1 Month commission for Rental agreements upon successful closure. Initial property consultations, document checks, and site walkthroughs are 100% free with zero hidden charges.'
  },
  {
    q: 'What kind of real estate services do you provide in Dwarka?',
    a: 'Choudhary Realestate is a premier Real Estate Brokerage & Advisory Firm in Dwarka. We deal exclusively in approved properties (DDA / Municipal approved) with 100% clear titles: independent builder floors, society flats (CGHS), freehold residential plots, and high-street commercial shops. We inspect every paper thoroughly (30-year chain) before listing any property.'
  },
  {
    q: 'Is the initial property consultation and site visit free?',
    a: 'Yes! We never charge for site visits, market consultations, or pricing advice. You can schedule accompanied site visits with our senior sector specialists via call or WhatsApp at +91 97169 71670.'
  },
  {
    q: 'Is property registration active for builder floors in Dwarka?',
    a: 'Yes, the Delhi Government Sub-Registrar Office (Kapashere / Dwarka) is fully active in registering freehold builder floors in Dwarka. Buyers receive complete ownership of proportional land plot share along with their independent floor unit deed.'
  },
  {
    q: 'Can I get a home loan on independent builder floors in Dwarka?',
    a: 'Absolutely. All properties pre-vetted by Choudhary Realestate qualify for up to 80% to 90% financing from major financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, and LIC Housing Finance.'
  },
  {
    q: 'How long does home loan sanction take for listed properties?',
    a: 'Because our listed properties undergo prior title inspection and sanction plan verification, bank approvals are typically processed within 5 to 7 working days with doorstep documentation support.'
  },
  {
    q: 'Which banks are available for home loans through Choudhary Realestate?',
    a: 'We have direct tie-ups with 18+ leading nationalized and private banks including SBI, HDFC, ICICI, PNB, Axis Bank, Kotak Mahindra Bank, Bank of Baroda, and Canara Bank to ensure you receive the absolute lowest interest rate and maximum tenure.'
  },
  {
    q: 'What are the common luxury amenities provided in new builder floors?',
    a: 'Standard luxury amenities include stilt-level car parking, modern modular kitchens with branded chimneys and gas hobs, premium Schindler/Otis lifts, Italian marble flooring, branded Jaquar/Kohler sanitaryware, IGL piped gas connection, and separate electric and dual water meters (DJB + Borewell).'
  }
];

// Blog Guides
export const CHOUDHARY_BLOGS: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'Why Builder Floors are in Massive Demand in Dwarka, Delhi',
    slug: 'why-builder-floors-demand-dwarka-delhi',
    excerpt: 'Explore why modern homebuyers are choosing independent builder floors over high-rise apartments in Dwarka: privacy, stilt parking, private lifts, and proportional land rights.',
    author: 'R.K. Choudhary',
    publishDate: '2026-08-14',
    readingTime: 6,
    category: 'Market Trends',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Builder Floors', 'Dwarka Real Estate', 'Freehold Properties', 'Investment'],
    content: [
      'In recent years, the residential property market in Dwarka, New Delhi has witnessed an unprecedented surge in demand for independent builder floors, particularly across Sectors 8, 11, 19, and 23.',
      'Unlike high-rise apartments where homeowners share common undivided land rights with hundreds of neighbors, independent builder floors provide buyers with proportional ownership of the underlying freehold plot.',
      'Modern builder floors in Dwarka are constructed on 100, 125, 150, and 250 square yard plots, featuring dedicated stilt car parking on the ground level, high-speed passenger lifts (Schindler or Otis), modular Italian kitchens, and separate utilities for each floor.',
      'Furthermore, the completion of major infrastructure projects like the Dwarka Expressway, Yashobhoomi Convention Centre, and the upcoming International Golf Course in Sector 24 has accelerated capital appreciation by over 22% in the last 18 months.'
    ]
  },
  {
    id: 'blog-2',
    title: "Registry and Legal Approvals: Dwarka Property Buyer's Checklist",
    slug: 'registry-legal-approvals-dwarka-property-checklist',
    excerpt: 'Essential 30-year legal checklist every homebuyer must verify before purchasing a builder floor or society flat in Dwarka to prevent legal disputes.',
    author: 'Legal Cell, Choudhary Realestate',
    publishDate: '2026-08-08',
    readingTime: 8,
    category: 'Legal & Advisory',
    featuredImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    tags: ['Property Registry', 'Legal Scrutiny', 'Due Diligence', 'Dwarka Sub-Registrar'],
    content: [
      'Buying real estate in Delhi requires meticulous due diligence. At Choudhary Realestate, we strictly follow a 4-tier title verification protocol before marketing any property to our clients.',
      'Step 1: Original Allotment & Chain of Title Deeds. Ensure the entire unbroken chain of ownership documents (from original DDA allotment to the current seller) is verified at the Sub-Registrar office.',
      'Step 2: Freehold Conversion Status. Confirm that the property is registered as Freehold with the Delhi Development Authority (DDA) with a clear Conveyance Deed.',
      'Step 3: MCD Sanctioned Building Plan. Builder floors must comply with the approved building plan (Stilt + 4 Floors) without unauthorized coverage or non-compoundable encroachments.',
      'Step 4: Non-Encumbrance Certificate & Property Tax Clearance. Verify up-to-date MCD property tax receipts and obtain a 30-year non-encumbrance certificate confirming no bank mortgage or litigation exists.'
    ]
  },
  {
    id: 'blog-3',
    title: 'DDA Society Flats vs. Independent Builder Floors: Which is Right for You?',
    slug: 'dda-society-flats-vs-builder-floors-dwarka',
    excerpt: 'A comprehensive comparison between Cooperative Group Housing Societies (CGHS) and low-rise independent builder floors in Dwarka on cost, maintenance, and lifestyle.',
    author: 'Advisory Team',
    publishDate: '2026-07-28',
    readingTime: 5,
    category: 'Buyer Guide',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    tags: ['Society Flats', 'CGHS Dwarka', 'Builder Floors', 'Home Buying'],
    content: [
      'One of the most frequent questions buyers ask our team is whether they should opt for a gated CGHS society flat in Sector 22 or a newly built builder floor in Sector 8 or 11.',
      'CGHS society flats offer gated community living, 24x7 security guards, power backup, and shared community parks. However, monthly maintenance fees can range from ₹3,000 to ₹6,000, and renovation freedom is constrained by society by-laws.',
      'On the other hand, builder floors offer independent living with zero monthly society maintenance charges, private terrace usage for top floor units, customized interior designs, and immediate stilt car parking with private lifts.',
      'Both options have proven exceptional investments in Dwarka. Our advisors evaluate your family needs, budget, and loan eligibility to recommend the ideal property type.'
    ]
  }
];

// Testimonials
export const CHOUDHARY_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Col. Rajeshwar Bakshi (Retd.)',
    role: 'Homeowner, Sector 8 Dwarka',
    property: '3 BHK Builder Floor (B Block)',
    quote: 'Choudhary Realestate made our property search transparent and stress-free. Unlike other local brokers who inflate prices, they adhere strictly to their 1% brokerage fee and handled all Sub-Registrar registry paperwork without a single hitch.',
    rating: 5,
    date: 'July 2026'
  },
  {
    id: 't-2',
    name: 'Dr. Sunita & Arvind Bansal',
    role: 'Consultant, Venkateshwar Hospital',
    property: '2 BHK Redeveloped Floor (Sector 19)',
    quote: 'As busy doctors, we had very little time to inspect paperwork. Choudhary Realestate conducted a complete 30-year title search and arranged our SBI home loan at 8.45% in just 6 days. Highly recommended!',
    rating: 5,
    date: 'August 2026'
  },
  {
    id: 't-3',
    name: 'Vikramjit Grover',
    role: 'Retail Investor & Entrepreneur',
    property: 'Commercial Retail Shop (Sector 14)',
    quote: 'Finding a high-yield retail shop near Vegas Mall with clear freehold titles seemed impossible until I met the team at Choudhary Realestate. The rental income started from day 30. Truly professional advisors.',
    rating: 5,
    date: 'September 2026'
  }
];

// Mandatory Legal Disclaimer
export const CHOUDHARY_LEGAL_DISCLAIMER =
  'Choudhary Realestate is an independent real estate consultancy and advisory firm registered with the Ministry of MSME, Government of India (UDYAM-DL-03-0063015). All properties displayed are subject to physical verification, title scrutiny, and document inspection. Prices, availability, and layout specifications are indicative and subject to prevailing market conditions. Choudhary Realestate adheres strictly to the transparent 1% brokerage model for sales transactions. We do not guarantee speculative capital appreciation. Buyers and sellers are advised to conduct independent legal verification before financial execution.';

// Exported BusinessWebsite Model for Catalog
export const CHOUDHARY_REALESTATE_WEBSITE: BusinessWebsite = {
  id: 'choudhary-realestate',
  slug: 'choudhary-realestate',
  businessName: 'Choudhary Realestate',
  category: 'realestate' as any,
  templateId: 'template-realestate-luxury-consultant',
  tagline: 'Best Property Consultant & Dealer in Dwarka, New Delhi',
  description: 'Choudhary Realestate is the premier property consultant and real estate advisory firm in Dwarka, New Delhi. Specializing in 100% legally verified DDA builder floors, society flats, luxury floors, freehold plots, and commercial spaces with a transparent 1% brokerage fee.',
  ownerName: 'R.K. Choudhary',
  phone: PHONE_NUMBER,
  whatsapp: WHATSAPP_NUMBER,
  email: EMAIL_ADDRESS,
  address: OFFICE_ADDRESS,
  city: 'Dwarka, New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Sector+8+Dwarka+New+Delhi',
  openingHours: 'Mon - Sun: 9:00 AM - 8:00 PM',
  secondaryColor: '#C5A25D', // Luxury Champagne Gold
  logoUrl: '/assets/choudhary-realestate/icon.png',
  coverUrl: '/assets/choudhary-realestate/home_hero_bg.webp',
  primaryColor: '#0F1E36', // Deep Luxury Navy
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Book Site Visit',
  specialBadge: 'Site #50 · Real Estate Consultant Active',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Best Property Dealer in Dwarka', isEnabled: true, order: 1 },
    { id: 'search', title: 'Property Search & Filter', isEnabled: true, order: 2 },
    { id: 'categories', title: 'Property Categories', isEnabled: true, order: 3 },
    { id: 'stats', title: 'Trust Numbers & Experience', isEnabled: true, order: 4 },
    { id: 'listings', title: 'Verified Property Listings', isEnabled: true, order: 5 },
    { id: 'ethics', title: 'Transparent 1% Brokerage Policy', isEnabled: true, order: 6 },
    { id: 'sectors', title: 'Dwarka Sectors Guide', isEnabled: true, order: 7 },
    { id: 'loan-calc', title: 'Home Loan & EMI Calculator', isEnabled: true, order: 8 },
    { id: 'valuation', title: 'Free Property Valuation', isEnabled: true, order: 9 },
    { id: 'post-property', title: 'List Your Property', isEnabled: true, order: 10 },
    { id: 'verification', title: '30-Year Legal Scrutiny', isEnabled: true, order: 11 },
    { id: 'blogs', title: 'Real Estate Guides & Insights', isEnabled: true, order: 12 },
    { id: 'testimonials', title: 'Client Reviews', isEnabled: true, order: 13 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 14 },
    { id: 'contact', title: 'Office Location & Site Visit Desk', isEnabled: true, order: 15 }
  ],
  offers: [
    {
      id: 'cre-offer-1',
      title: 'Free Accompanied Site Visits',
      description: 'Zero consultation or car escort charges for property walkthroughs in Dwarka.',
      discountPercent: 100,
      couponCode: 'VISITFREE',
      isActive: true
    },
    {
      id: 'cre-offer-2',
      title: 'Free 30-Year Document Verification',
      description: 'Complimentary legal chain title verification for sellers listing directly with Choudhary Realestate.',
      discountPercent: 100,
      couponCode: 'TITLECHECK',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'cre-gal-1',
      title: 'Luxury Builder Floor Exterior, Dwarka',
      category: 'exterior',
      imageUrl: '/assets/choudhary-realestate/dwarka_luxury_building_hero.jpg'
    },
    {
      id: 'cre-gal-2',
      title: 'Independent Builder Floors Hub Sector 8',
      category: 'facilities',
      imageUrl: '/assets/choudhary-realestate/home_hero_bg.webp'
    }
  ],
  items: []
};
