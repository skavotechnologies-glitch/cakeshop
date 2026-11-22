export interface Cake {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'signature' | 'birthday' | 'wedding' | 'indulgence';
  flavors: string[];
  dietary: string[];
  rating: number;
  reviewsCount: number;
  badge?: string;
  servings: string;
}

export interface CartItem {
  cake: Cake;
  quantity: number;
  selectedWeight: string; // e.g. "0.5 kg", "1.0 kg", "2.0 kg"
  customMessage?: string;
  unitPrice: number;
}

export interface ShowcaseCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cakeName: string;
  cakePrice: string;
  image: string;
  features: string[];
  badge: string;
  servingsInfo: string;
  flavorNotes: string;
}

export interface IngredientFeature {
  id: string;
  name: string;
  origin: string;
  description: string;
  tastingNotes: string;
  image: string;
  accent: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  cakeOrdered: string;
  avatar: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  likes: number;
  aspect: string;
}

export interface CustomCelebrationOrder {
  cakeFlavor: string;
  tierOrSize: string;
  occasion: string;
  pipingMessage: string;
  deliveryDate: string;
  deliveryTime: string;
  recipientName: string;
  recipientPhone: string;
  specialRequests: string;
}
