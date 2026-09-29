export type VenueCategory = 'matcha' | 'coffee' | 'dual';

export interface MenuItem {
  id: string;
  name: string;
  japaneseName?: string;
  category: 'ceremonial_matcha' | 'specialty_pourover' | 'espresso_craft' | 'signature_infusion' | 'wagashi_pastry';
  description: string;
  price: string;
  tastingNotes: string[];
  roastOrCultivar?: string;
  brewMethod?: string;
}

export interface Venue {
  id: string;
  name: string;
  japaneseName?: string;
  city: string;
  neighborhood: string;
  category: VenueCategory;
  lat: number;
  lng: number;
  address: string;
  rating: number;
  reviewCount: number;
  priceLevel: '$$' | '$$$' | '$$$$';
  aesthetic: string;
  atmosphere: string[];
  description: string;
  image: string;
  heroImage?: string;
  signatureItem: string;
  projectedMenu: MenuItem[];
  vibeScore: number;
  distanceKm?: number;
  openHours: string;
  placeId?: string;
  personalizedScore?: number;
  personalizedMatchReason?: string;
}

export interface VisitLog {
  id: string;
  venueId: string;
  venueName: string;
  venueImage: string;
  city: string;
  timestamp: number;
  status: 'visited' | 'planning';
  orderedItem: string;
  matchedMenuItemId?: string;
  matchedMenuItemName?: string;
  matchConfidence?: number;
  drinkPhotoUrl?: string;
  tasteRating: number;
  aestheticRating: number;
  flavorNotes: string[];
  userNotes: string;
  prepMethod?: string;
}

export interface TasteProfile {
  totalVisits: number;
  coffeeAffinity: number;
  matchaAffinity: number;
  topFlavorNotes: { tag: string; count: number }[];
  preferredBrew: string;
  visitedVenueIds: string[];
}

export type AiProvider = 'gemini_builtin' | 'gemini_custom' | 'openai' | 'claude';

export interface UserAiKeys {
  provider: AiProvider;
  geminiKey?: string;
  openaiKey?: string;
  claudeKey?: string;
}

export interface TravelPlanItem {
  time: string;
  title: string;
  type: 'coffee' | 'matcha' | 'culture' | 'lifestyle';
  venueName?: string;
  neighborhood: string;
  description: string;
  recommendedOrder: string;
  pairingNote: string;
}

export interface TravelPlan {
  city: string;
  theme: string;
  summary: string;
  stops: TravelPlanItem[];
  sommelierTastingPointers: string[];
}

export type MilkChoice = 'oat' | 'soy' | 'coconut' | 'two_percent' | 'whole' | 'local_farm';
export type SweetenerChoice = 'none' | 'honey' | 'sugar' | 'stevia' | 'maple_syrup';
export type SweetenerSource = 'local' | 'store';
export type QualityDepthMode = 'generic' | 'depth';

export interface BaristaPreferences {
  milk: MilkChoice;
  sweetener: SweetenerChoice;
  sweetenerSource: SweetenerSource;
  qualityDepth: QualityDepthMode;
  matchaGrade: string;
  matchaPrep: string;
  coffeeType: string;
  coffeeRoast: string;
}

export interface ComparativeItemPair {
  id: string;
  favoredItem: {
    venueName: string;
    venueCity: string;
    itemName: string;
    category: 'matcha' | 'coffee';
    image: string;
    keyNote: string;
  };
  comparedItem: {
    venueName: string;
    venueCity: string;
    itemName: string;
    category: 'matcha' | 'coffee';
    image: string;
    keyNote: string;
  };
  sharedPalateReason: string;
  vibeOverlapScore: number;
}
