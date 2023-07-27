import { Injectable } from '@angular/core';
import { Shoe } from 'src/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedShoes: Array<any> = [];


  constructor() { }

  addToCart(shoe: any, size: any) {
    const sizeShoe = Number(size);
    const shoeIndex = this.selectedShoes.findIndex(s => s.id === shoe.id && s.size.includes(sizeShoe));
    if (shoeIndex >= 0) {
      this.selectedShoes[shoeIndex].quantity++;
    } else {
      this.selectedShoes.push({ size, "quantity": 1, "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price })
    }
    // console.log("show", this.selectedShoes)
    // save cart on sessionStorage
    sessionStorage.setItem("cartSession", JSON.stringify(this.selectedShoes));
  }

  getSelectedShoe() {
    return this.selectedShoes;
  }

  getCartTotalQuantity() {
    let carts: any = this.getSelectedShoe();
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.quantity
    });
    return total;
  }
}
