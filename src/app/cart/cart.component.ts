import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import {Product} from '../products/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total: number;
  currency: string;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartService.sharedCart.subscribe(cart => {
      this.products = cart.items;
      this.total = cart.total;
      this.currency = cart.currency;
    });
  }

  deleteProductFromCart(product: Product) {

  }

  goToShop() {
    this.router.navigateByUrl('/products');
  }
}
