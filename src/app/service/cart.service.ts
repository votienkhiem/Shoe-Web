import { Injectable } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { Shoe } from 'src/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoes: Shoe[] = [];
  selectedSize: any = [];
  selectedShoe: any;

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
  addToCart(shoe: Shoe, size: any) {
    let letShoe = this.selectedShoe[shoe.id];
    if(letShoe){
      
    }

    // var index = this.shoes.findIndex(item => item.id === shoe.id);
    // var shoeSize = shoe.size.find((e: any) => {
    //   return e.size === size
    // })
    // var indexSize = this.selectedSize.findIndex((item: { id: number; }) => item.id === shoeSize.id);
    // // l
    // if (index >= 0) {
    //   this.shoes[index].quantity++;
    // }
    // else {
    //   this.shoes.push(shoe);
    //   this.selectedSize.push(shoeSize);
    // }
    // // save cart on sessionStorage
    // sessionStorage.setItem("cartSession", JSON.stringify(this.shoes));
  }
  getShoes() {
    return this.shoes;
  }
  getSizes() {
    return this.selectedSize;
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
