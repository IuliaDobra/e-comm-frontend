import { Product } from '../products/product.model';

export class Cart {
  items: Product[];
  total: number;
  currency: string;
}
