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
}

export type { Product };

const products: Product[] = [
  {
    id: 1,
    name: "Natureade",
    description: "A refreshing blend of natural flavors.",
    price: 0.0,
    imageUrl: "https://placehold.co/1000x1000?text=Natureurade",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "natureurade",
    featured: true,
  },
  {
    id: 2,
    name: "Strawberry Lemonade",
    description: "A sweet and tangy strawberry lemonade.",
    price: 0.0,
    imageUrl: "https://placehold.co/1000x1000?text=Strawberry+Lemonade",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "strawberry-lemonade",
    featured: true,
  },
  {
    id: 3,
    name: "Blueberry Lemonade",
    description: "A refreshing blueberry lemonade.",
    price: 0.0,
    imageUrl: "https://placehold.co/1000x1000?text=Blueberry+Lemonade",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "blueberry-lemonade",
    featured: true,
  },
  {
    id: 4,
    name: "Passion Fruit Lemonade",
    description: "A tropical passion fruit lemonade.",
    price: 0.0,
    imageUrl: "https://placehold.co/1000x1000?text=Passion+Fruit+Lemonade",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "passion-fruit-lemonade",
    featured: true,
  },
  {
    id: 5,
    name: "Guava Lemonade",
    description: "A sweet guava lemonade.",
    price: 0.0,
    imageUrl: "https://placehold.co/1000x1000?text=Guava+Lemonade",
    category: "beverage",
    lowSugarVariant: true,
    salesChannel: "Amazon",
    slug: "guava-lemonade",
    featured: true,
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
  },
];

export default products;
