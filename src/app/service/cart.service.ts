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
  }
  getShoes() {
    return this.shoes
  }
}
