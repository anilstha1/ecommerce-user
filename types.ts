export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
  createdAt: string;
  updatedAt: string;
}
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  category: Category;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem extends Product {
  selectedColor?: string;
  selectedSize?: string;
}
