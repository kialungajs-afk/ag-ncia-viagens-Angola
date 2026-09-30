export interface Destination {
  id: string;
  name: string;
  cities: string;
  badge: string;
  airlineTag: string;
  flightDuration?: string;
  description: string;
  imageUrl: string;
  popularFor: string[];
  visaInfo: string;
  recommendedAirlines: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  detailedText: string;
  inclusions: string[];
  checklist: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  departure: string;
  duration: string;
  description: string;
  imageUrl: string;
  priceNote: string;
  highlights: string[];
  included: string[];
}

export interface BookingFormData {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  isOneWay: boolean;
  passengers: string;
  cabinClass: 'economy' | 'premium_economy' | 'business';
  preferredCurrency: 'AOA' | 'USD' | 'EUR';
  fullName: string;
  phone: string;
  email: string;
  needsVisaSupport: boolean;
  notes: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  initials: string;
  rating: number;
}
