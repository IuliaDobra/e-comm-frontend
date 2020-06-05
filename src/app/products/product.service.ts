import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`).toPromise();
  }

  getProductsForStore(storeId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?storeId=${storeId}`);
  }

  findProductsInStore(search, storeId): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?storeId=${storeId}&search=${search}`);
  }

  findProducts(search): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?search=${search}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/products/${productId}`);
  }
}
