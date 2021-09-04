export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductResolved {
  product: Product | null;
  error?: any;
}
