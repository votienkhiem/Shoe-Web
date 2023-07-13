import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shoe } from 'src/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoes: Shoe[] = [];
  selectedSize: any = [];

  constructor() { }
  // addToCart(shoe: Shoe) {
  //   var index = this.shoes.findIndex(item => item.id === shoe.id)
  //   if (index >= 0) {
  //     this.shoes[index].quantity++;
  //   }
  //   else {

  //     this.shoes.push(shoe);

  //   }
  //   // save cart on sessionStorage
  //   sessionStorage.setItem("cartSession", JSON.stringify(this.shoes));
  // }
  addToCart(shoe: Shoe, selectedSize: any) {
    var index = this.shoes.findIndex(item => item.id === shoe.id)
    if (index >= 0) {
      this.shoes[index].quantity++;
    }
    else {
      this.shoes.push(shoe);
      this.selectedSize.push(selectedSize);
      // console.log('arr size', this.selectedSize.push(selectedSize))

    }
    // save cart on sessionStorage
    sessionStorage.setItem("cartSession", JSON.stringify(this.shoes));
  }
  getShoes() {
    return this.shoes
  }
  getSizes() {
    return this.selectedSize
  }
  getCartTotalQuantity() {
    let carts: any = this.getShoes();
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.quantity
    });
    return total;
  }
}
