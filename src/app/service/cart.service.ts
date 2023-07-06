import { Injectable } from '@angular/core';
import { Shoe } from 'src/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoes: Shoe[] = [];

  constructor() { }
  addToCart(shoe: Shoe) {
    this.shoes.push(shoe);
    // save cart on sessionStorage
    sessionStorage.setItem("cartSession", JSON.stringify(this.shoes));
  }
  getShoes() {
    return this.shoes
  }
}
