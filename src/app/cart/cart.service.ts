import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Cart} from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject(new Cart());
  sharedCart = this.cart.asObservable();

  constructor() { }

  nextCart(cart: Cart) {
    this.cart.next(cart);
  }
}
