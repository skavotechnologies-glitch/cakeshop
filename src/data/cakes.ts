import { Cake, ShowcaseCategory, IngredientFeature, Testimonial, GalleryItem } from '../types';

export const SIGNATURE_CAKES: Cake[] = [
  {
    id: 'strawberry-dream',
    name: 'Strawberry Dream',
    tagline: 'Hand-picked alpine strawberries & whipped chantilly',
    description: 'Fresh strawberries, vanilla cream, soft sponge layers soaked in wild berry syrup, finished with white chocolate pearls.',
    price: 1499,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop',
    category: 'signature',
    flavors: ['Fresh Strawberries', 'Tahitian Vanilla Cream', 'Feather Sponge'],
    dietary: ['Eggless Available', '100% Natural Berries'],
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Bestseller',
    servings: '6-8 Servings (1 kg)',
  },
  {
    id: 'velvet-romance',
    name: 'Velvet Romance',
    tagline: 'A crimson dream cloaked in silky cream cheese',
    description: 'Rich red velvet, silky cream cheese frosting, layered with subtle hints of natural cocoa and dusted with crimson velvet crumb.',
    price: 1799,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop',
    category: 'signature',
    flavors: ['Dark Cocoa Sponge', 'Whipped Cream Cheese', 'Vanilla Bean Glaze'],
    dietary: ['Eggless Available', 'Artisan Crafted'],
    rating: 5.0,
    reviewsCount: 198,
    badge: "Chef's Pick",
    servings: '8-10 Servings (1.2 kg)',
  },
  {
    id: 'chocolate-indulgence',
    name: 'Chocolate Indulgence',
    tagline: '70% Valrhona Belgian chocolate & silk ganache',
    description: 'Belgian chocolate, ganache, chocolate curls, dark chocolate mirror glaze, and a crispy hazelnut praline crunch layer.',
    price: 1699,
    originalPrice: 1899,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    category: 'signature',
    flavors: ['70% Belgian Dark Chocolate', 'Hazelnut Praline', 'Silk Ganache'],
    dietary: ['Gluten-Friendly Option', 'Eggless Available'],
    rating: 4.9,
    reviewsCount: 226,
    badge: 'Award Winner',
    servings: '8-10 Servings (1 kg)',
  },
  {
    id: 'golden-vanilla',
    name: 'Golden Vanilla',
    tagline: 'Pure Madagascar bourbon vanilla & edible 24k gold leaf',
    description: 'Madagascar vanilla, buttercream, delicate floral finish, slow-steeped vanilla bean milk soak, and edible gold flakes.',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop',
    category: 'signature',
    flavors: ['Bourbon Vanilla Bean', 'Swiss Meringue Buttercream', '24K Edible Gold'],
    dietary: ['Eggless Available', 'Organic Butter'],
    rating: 4.8,
    reviewsCount: 94,
    badge: 'New Classic',
    servings: '6-8 Servings (0.8 kg)',
  },
  {
    id: 'rose-pistachio-reverie',
    name: 'Rose & Pistachio Reverie',
    tagline: 'Ispahan inspired Damask rose petals & Iranian pistachios',
    description: 'Delicate Persian pistachio sponge, infused with organic rosewater syrup, white chocolate mousse, and crystallised rose petals.',
    price: 1899,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
    category: 'signature',
    flavors: ['Roasted Pistachio', 'Damask Rose Water', 'White Chocolate'],
    dietary: ['Eggless Available', 'Real Floral Infusion'],
    rating: 4.9,
    reviewsCount: 78,
    badge: 'Limited Batch',
    servings: '6-8 Servings (1 kg)',
  },
  {
    id: 'salted-caramel-opera',
    name: 'Caramel Hazelnut Opera',
    tagline: 'Six exquisite layers of almond sponge, coffee & fleur de sel',
    description: 'Joconde almond sponge soaked in Grand Cru espresso, salted caramel buttercream, and dark chocolate glaze with toasted hazelnuts.',
    price: 1749,
    originalPrice: 1950,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=800&auto=format&fit=crop',
    category: 'signature',
    flavors: ['Fleur de Sel Caramel', 'Espresso Soak', 'Dark Chocolate Joconde'],
    dietary: ['Nut-Rich', 'Eggless Available'],
    rating: 4.9,
    reviewsCount: 112,
    badge: 'Patisserie Special',
    servings: '8-10 Servings (1.1 kg)',
  }
];

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: 'birthday',
    title: 'Birthday Magic',
    subtitle: 'Moments of unadulterated joy, candlelit smiles, and unforgettable wishes',
    description: 'Celebrate another glorious trip around the sun with our signature celebratory cakes. Infused with whimsical textures, shimmering accents, fresh seasonal berries, and customized handcrafted edible plaques.',
    cakeName: 'La Fête Royale',
    cakePrice: 'From ₹1,899',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Custom gold leaf piped name calligraphy',
      'Artisan French macarons & berries garnish',
      'Sparkling keepsake candle set included',
      'Available in 4 bespoke flavor combinations'
    ],
    badge: 'Celebration Favorite',
    servingsInfo: '10 to 25 Guests (Custom tiers available)',
    flavorNotes: 'Fluffy chiffon sponge, raspberry coulis, and light white chocolate cream.'
  },
  {
    id: 'wedding',
    title: 'Wedding Elegance',
    subtitle: 'Architectural confectionery sculpted for the most romantic day of your life',
    description: 'Bespoke multi-tiered masterpieces crafted with couture precision. From hand-sculpted sugar flowers and delicate pearl dust to structural splendor, every wedding cake is designed to be the breathtaking focal point of your reception.',
    cakeName: 'L’Amour Éternel Tiered Cake',
    cakePrice: 'From ₹4,499',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Private tasting box delivered to your doorstep',
      'Architectural multi-tier design with velvet finish',
      'Edible 24K gold foil and sculpted sugar blossoms',
      'White-glove chilled delivery and on-site setup'
    ],
    badge: 'Couture Wedding Collection',
    servingsInfo: '30 to 120 Guests (2 to 5 tiers)',
    flavorNotes: 'Madagascar bourbon vanilla, champagne reduction, and Swiss silk meringue.'
  },
  {
    id: 'indulgence',
    title: 'Everyday Indulgence',
    subtitle: 'Small delights that turn an ordinary afternoon tea into pure luxury',
    description: 'You never need a grand anniversary to savor pure perfection. Our everyday collection features single-origin cocoa gateaux, fresh fruit tartlets, and petite cakes baked fresh every morning in limited micro-batches.',
    cakeName: 'Le Petit Chocolat Noir',
    cakePrice: 'From ₹899',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Baked in daily small batches before 8:00 AM',
      'Single-origin Ecuadorian 72% dark chocolate',
      'Crisp roasted hazelnut biscuit base',
      'Delivered within 60 minutes in ambient luxury packaging'
    ],
    badge: 'Daily Fresh Batch',
    servingsInfo: '2 to 4 Servings (Perfect for tea time)',
    flavorNotes: 'Deep roasted cocoa, Madagascar vanilla mousse, and sea-salt flakes.'
  }
];

export const INGREDIENT_FEATURES: IngredientFeature[] = [
  {
    id: 'berries',
    name: 'Freshly Picked Berries',
    origin: 'Hand-harvested from organic alpine farms at dawn',
    description: 'Plump strawberries, tart raspberries, and wild blueberries selected at peak ripeness for explosive natural sweetness and vibrant acidity.',
    tastingNotes: 'Crisp, fragrant, bright natural juices without artificial purées',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=600&auto=format&fit=crop',
    accent: '#D99A9C'
  },
  {
    id: 'chocolate',
    name: 'Real Belgian Chocolate',
    origin: 'Sustainable single-origin cacao from Callebaut & Valrhona',
    description: 'Slow-conched 70% dark and velvety milk couverture with high cocoa butter content for that unmistakable glossy melt-in-your-mouth finish.',
    tastingNotes: 'Deep roasted cocoa notes, caramel undertones, velvety silk finish',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=600&auto=format&fit=crop',
    accent: '#4B2E26'
  },
  {
    id: 'vanilla',
    name: 'Pure Madagascar Vanilla',
    origin: 'Sun-cured Bourbon vanilla pods from Sambava, Madagascar',
    description: 'No artificial essence or vanillin. We split whole oily pods by hand and infuse their caviar into our creams, custards, and sponge soaks.',
    tastingNotes: 'Floral, woody warmth with hundreds of visible fragrant caviar specks',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600&auto=format&fit=crop',
    accent: '#C5A46D'
  },
  {
    id: 'cream',
    name: 'Whipped Fresh Cream',
    origin: 'Slow-churned dairy from pasture-raised grass-fed herds',
    description: 'Rich, unhomogenized double cream whipped to soft billowy peaks daily. Light as a morning cloud with a clean, naturally sweet dairy finish.',
    tastingNotes: 'Silky, never greasy, delicately light with zero palm oil or fillers',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop',
    accent: '#FFF8F0'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ananya R.',
    role: 'Bride & Creative Director',
    quote: 'Every detail was perfect. The cake wasn’t just beautiful, it was the undeniable highlight of our celebration. Guests are still asking who baked it!',
    rating: 5,
    cakeOrdered: 'L’Amour Éternel 3-Tier Wedding Cake',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    verified: true
  },
  {
    id: 't-2',
    name: 'Rahul M.',
    role: 'Food Critic & Architect',
    quote: 'One bite and I knew this would be our family’s forever favorite bakery. The balance of acidity in the Strawberry Dream and the cloud-like sponge is Michelin-grade.',
    rating: 5,
    cakeOrdered: 'Strawberry Dream & Velvet Romance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    verified: true
  },
  {
    id: 't-3',
    name: 'Meera S.',
    role: 'Event Designer',
    quote: 'The most beautiful cake I’ve ever ordered. It looked like an Haute Couture fashion dream and tasted even better than it photographed.',
    rating: 5,
    cakeOrdered: 'La Fête Royale Birthday Special',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    verified: true
  },
  {
    id: 't-4',
    name: 'Vikram & Priya K.',
    role: 'Silver Jubilee Celebration',
    quote: 'From ordering to seamless chilled delivery, the customer care was pure royalty. The 24k gold leaf and chocolate curls were breathtaking in person.',
    rating: 5,
    cakeOrdered: 'Chocolate Indulgence Signature',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Couture Floral Wedding Tier',
    category: 'Wedding Special',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop',
    likes: 1240,
    aspect: 'tall'
  },
  {
    id: 'g-2',
    title: 'Strawberry Shortcake Cloud',
    category: 'Fresh Berry',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop',
    likes: 980,
    aspect: 'wide'
  },
  {
    id: 'g-3',
    title: 'Valrhona Ganache & Gold Flakes',
    category: 'Belgian Chocolate',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop',
    likes: 1420,
    aspect: 'tall'
  },
  {
    id: 'g-4',
    title: 'Precision Piping & Petals',
    category: 'Artisan Decoration',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    likes: 850,
    aspect: 'square'
  },
  {
    id: 'g-5',
    title: 'French Macaron Towers & Petit Fours',
    category: 'Dessert Bar',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop',
    likes: 1105,
    aspect: 'square'
  },
  {
    id: 'g-6',
    title: 'Morning Flour & Golden Crusts',
    category: 'Bakery Atelier',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop',
    likes: 760,
    aspect: 'wide'
  }
];
