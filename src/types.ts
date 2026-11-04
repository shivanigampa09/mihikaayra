export type ProductCategorySlug = 
  | 'sweets'
  | 'spices'
  | 'sea-food'
  | 'pickles'
  | 'jute-bags'
  | 'gaming-products'
  | 'millets'
  | 'tea'
  | 'coffee'
  | 'cosmetics'
  | 'podies'
  | 'powders'
  | 'snacks'
  | 'honey'
  | 'fishes'
  | 'dry-fruits'
  | 'handcraft'
  | 'textiles'
  | 'interiors'
  | 'automobiles'
  | 'industrial'
  | 'medical-materials'
  | 'engineering-materials';

export interface ProductCategory {
  id: ProductCategorySlug;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  exportHighlights: string[];
  itemCount: number;
  hsCode?: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  categorySlug: ProductCategorySlug;
  categoryName: string;
  name: string;
  nativeName?: string;
  nativeOrGradeName?: string;
  hsCode: string;
  image: string;
  galleryImages: string[];
  shortDescription: string;
  fullDescription: string;
  specifications: Specification[];
  benefits: string[];
  applications: string[];
  exportMarkets: string[];
  packagingOptions: string[];
  shelfLifeOrDurability: string;
  minimumOrderQuantity: string;
  isFeatured?: boolean;
  isTopExport?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  type: 'import' | 'export' | 'both';
  title: string;
  subtitle: string;
  iconName: string;
  image: string;
  description: string;
  keyFeatures: string[];
  processSteps: { title: string; desc: string }[];
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Exports' | 'Marine & Food' | 'Spices & Agri' | 'Warehousing' | 'Packaging';
  image: string;
  location: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  company: string;
  country: string;
  flag: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  tradeType: 'Import' | 'Export' | 'Merchant Trade' | 'Consulting';
  productCategory: string;
  estimatedQuantity: string;
  portOfDestination?: string;
  message: string;
}
