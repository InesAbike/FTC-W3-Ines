 // Types de base
export type PetGender = 'Male' | 'Female';
export type PetSize = 'Small' | 'Medium' | 'Large';
export type PetAge = string; // "2 months", "1 year", etc.
export type Currency = 'VND' | 'USD' | 'EUR';
export type PetCategory = 'Dog' | 'Cat' | 'Bird' | 'Fish' | 'Rabbit' | 'Other';
export type PetBreed = string;

// Interface pour les images du produit
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isMain?: boolean;
}

// Interface pour les caractéristiques détaillées
export interface PetCharacteristics {
  sku: string;
  gender: PetGender;
  age: PetAge;
  size: PetSize;
  color: string;
  vaccinated: boolean;
  dewormed: boolean;
  cert: string | null; // "Yes (MKA)", "No", etc.
  microchip: boolean;
  location: string;
  publishedDate: Date;
  additionalInfo?: string;
}

// Interface pour les informations de santé et garanties
export interface HealthGuarantees {
  healthGuarantee: boolean;
  identificationGuarantee: boolean;
  healthCertificate?: string;
  vaccinationRecord?: string;
}

// Interface pour le prix avec différentes devises
export interface ProductPrice {
  amount: number;
  currency: Currency;
  formatted: string; // "14,000,000 VND"
}

// Interface pour les produits similaires/recommandés
export interface RelatedPet {
  id: string;
  name: string;
  price: ProductPrice;
  image: string;
  breed: string;
  category: PetCategory;
  slug: string;
}

// Interface pour les informations de contact/vendeur
export interface SellerInfo {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  verified: boolean;
  responseTime?: string; // "Usually responds within 1 hour"
  location: string;
}

// Interface principale pour le détail du produit
export interface Pet {
  id: string;
  slug: string;
  name: string;
  price: ProductPrice;
  category: PetCategory;
  breed: PetBreed;
  description?: string;
  images?: ProductImage[];
  characteristics?: PetCharacteristics;
  healthGuarantees?: HealthGuarantees;
  seller?: SellerInfo;
  relatedProducts?: RelatedPet[];
  createdAt?: Date;
  updatedAt?: Date;
  isAvailable?: boolean;
  viewCount?: number;
  isFeatured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export interface PetCardProps extends Pet {
    className?: string;
}



// export interface Pet {
//   id: string;
//   name: string;
//   breed: string;
//   image: string;
//   gender: 'Male' | 'Female';
//   age: string;
//   price: number;
//   currency: string;
// }
