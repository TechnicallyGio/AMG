interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  lowSugarVariant?: boolean;
  nutritionFactsImgUrl?: string;
  lowSugarNutritionFactsImgUrl?: string;
  salesChannel?: "Amazon" | "Popup-Exclusive";
  slug: string;
  featured?: boolean;
  amazonLink?: string;
  characteristics?: string[];
  promoImageUrl?: string[];
}

export type { Product };

const products: Product[] = [
  {
    id: 1,
    name: "Natureade",
    description: "A refreshing blend of natural flavors.",
    price: 0.0,
    imageUrl: "/images/branding/flavors/naturade.png",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "Natureade",
    featured: true,
    promoImageUrl: [
      "https://placehold.co/1000x1000?text=Nature's+Gatorade+Promo+1",
      "https://placehold.co/1000x1000?text=Nature's+Gatorade+Promo+2",
      "https://placehold.co/1000x1000?text=Nature's+Gatorade+Promo+3",
    ],
  },
  {
    id: 2,
    name: "Strawberry Lemonade",
    description: "A sweet and tangy strawberry lemonade.",
    price: 0.0,
    imageUrl: "/images/branding/flavors/strawberry-lemonade.png",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "strawberry-lemonade",
    featured: true,
    promoImageUrl: [
      "https://placehold.co/1000x1000?text=Strawberry+Lemonade+Promo+1",
      "https://placehold.co/1000x1000?text=Strawberry+Lemonade+Promo+2",
      "https://placehold.co/1000x1000?text=Strawberry+Lemonade+Promo+3",
    ],
  },
  {
    id: 3,
    name: "Blueberry Lemonade",
    description: "A refreshing blueberry lemonade.",
    price: 0.0,
    imageUrl: "/images/branding/flavors/blueberry-lemonade.png",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "blueberry-lemonade",
    featured: true,
    promoImageUrl: [
      "https://placehold.co/1000x1000?text=Blueberry+Lemonade+Promo+1",
      "https://placehold.co/1000x1000?text=Blueberry+Lemonade+Promo+2",
      "https://placehold.co/1000x1000?text=Blueberry+Lemonade+Promo+3",
    ],
  },
  {
    id: 4,
    name: "Passion Fruit Lemonade",
    description: "A tropical passion fruit lemonade.",
    price: 0.0,
    imageUrl: "/images/branding/flavors/passion-fruit-lemonade.png",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "passion-fruit-lemonade",
    featured: true,
    promoImageUrl: [
      "https://placehold.co/1000x1000?text=Passion+Fruit+Lemonade+Promo+1",
      "https://placehold.co/1000x1000?text=Passion+Fruit+Lemonade+Promo+2",
      "https://placehold.co/1000x1000?text=Passion+Fruit+Lemonade+Promo+3",
    ],
  },
  {
    id: 5,
    name: "Guava Lemonade",
    description: "A sweet guava lemonade.",
    price: 0.0,
    imageUrl: "/images/branding/flavors/guava-lemonade.png",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "guava-lemonade",
    featured: true,
    promoImageUrl: [
      "https://placehold.co/1000x1000?text=Guava+Lemonade+Promo+1",
      "https://placehold.co/1000x1000?text=Guava+Lemonade+Promo+2",
      "https://placehold.co/1000x1000?text=Guava+Lemonade+Promo+3",
    ],
  },
  {
    id: 6,
    name: "Sea Moss Gel",
    description: "A nutrient-rich sea moss gel.",
    price: 0.0,
    imageUrl: "https://placehold.co/1000x1000?text=Sea+Moss+Gel",
    category: "gel",
    salesChannel: "Popup-Exclusive",
    slug: "sea-moss-gel",
    promoImageUrl: [
      "https://placehold.co/1000x1000?text=Sea+Moss+Gel+Promo+1",
      "https://placehold.co/1000x1000?text=Sea+Moss+Gel+Promo+2",
      "https://placehold.co/1000x1000?text=Sea+Moss+Gel+Promo+3",
    ],
  },
  {
    id: 7,
    name: "Sea Moss Capsules",
    description: "Convenient sea moss capsules for on-the-go.",
    price: 0.0,
    imageUrl: "https://placehold.co/1000x1000?text=Sea+Moss+Capsules",
    category: "capsule",
    salesChannel: "Popup-Exclusive",
    slug: "sea-moss-capsules",
    promoImageUrl: [
      "https://placehold.co/1000x1000?text=Sea+Moss+Capsules+Promo+1",
      "https://placehold.co/1000x1000?text=Sea+Moss+Capsules+Promo+2",
      "https://placehold.co/1000x1000?text=Sea+Moss+Capsules+Promo+3",
    ],
  },
];

export default products;
