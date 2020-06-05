import { Component, OnInit } from '@angular/core';
import { orderBy } from 'lodash';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import {Cart} from '../../cart/cart.model';
import {CartService} from '../../cart/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  cart: Cart = new Cart();

  constructor(
    private productsService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    this.cart.items = [];
    this.cart.total = 0;
  }

  ngOnInit() {
    this.populateProducts();
  }

  populateProducts() {
    this.productsService.getAllProducts().then((products) => {
      this.products = products;
    });
  }

  search(event) {
    if (!!event.srcElement.value) {
      this.productsService.findProducts(event.srcElement.value)
        .subscribe(products => this.products = orderBy(products, 'id', 'ASC'));
    } else {
      this.populateProducts();
    }
  }

  addToCart(product: Product): void {
    this.cart.items.push(product);
    let totalCost = 0;
    this.cart.items.forEach(value => totalCost += value.price);
    this.cart.total = totalCost;
    this.cartService.nextCart(this.cart);
  }

  toggleCart() {
    this.router.navigateByUrl('/cart');
  }
}
