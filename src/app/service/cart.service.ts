import { Injectable } from '@angular/core';
import { Shoe } from 'src/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoes: Shoe[] = [];
  // selectedShoes: any = {};
  selectedShoes: Array<any> = [];


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
  // addToCart(shoe: any, size: any) {
  //   let shoesId = this.selectedShoes[shoe.id];
  //   let shoeIdCurrent = shoe.id;
  //   if (shoesId) {
  //     let selectedSize = shoesId[size];
  //     if (selectedSize) {
  //       { shoesId[size] = shoesId[size] + 1 };
  //     }
  //     else {
  //       shoesId[size] = 1;
  //     }
  //   }
  //   else {
  //     this.selectedShoes[shoeIdCurrent] = { [size]: 1 }
  //     // this.selectedShoes[shoeIdCurrent] = { [size]: 1 }
  //     // this.selectedShoes[shoeIdCurrent] = { "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price, "quantity": shoe.quantity }
  //     // this.selectedShoes[shoeIdCurrent] = { [size]: 1, ["shoeSelected"]: { "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price } }
  //     // this.selectedShoes[shoeIdCurrent] = { [size]: 1, ["shoeSelected"]: { "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price } }
  //   }
  // }
  // addToCart(shoe: any, size: any) {
  //   let index = this.selectedShoes.findIndex((item: { id: any; }) => item.id === shoe.id)

  //   if (index >= 0) {

  //     let selectedSize = this.selectedShoes[index].sizeS;
  //     if (selectedSize.hasOwnProperty([size])) {
  //       selectedSize[size]++;
  //       this.selectedShoes[index].quantity++
  //     }
  //     else {
  //       selectedSize[size] = 1;
  //       this.selectedShoes[index].quantity++
  //     }
  //   } else {
  //     this.selectedShoes.push({ "sizeS": { [size]: 1 }, "quantity": 1, "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price })
  //   }
  //   console.log("show ra day ", this.selectedShoes)
  // }
  // addToCart(shoe: any, size: any) {
  //   let shoeCheck = this.selectedShoes.find((item: { id: any; }) => item.id === shoe.id)
  //   // let sizeShoe = this.selectedShoes[indexShoe].size

  //   // if (index ) {
  //   //   // let selectedSize = this.selectedShoes[index].size;
  //   //   // let selectedId = this.selectedShoes[index].id;
  //   //   // if (selectedId && selectedSize.hasOwnProperty([size])) {
  //   //   //   this.selectedShoes[index].quantity++
  //   //   // }
  //   //   // else {
  //   //   //   // selectedSize[size] = 1;
  //   //   //   console.log("hello")
  //   //   // }
  //   //   // console.log("show size ", selectedSize)
  //   //   // console.log("show id ", selectedId)
  //   // } else {
  //   //   this.selectedShoes.push({ "size": { [size]: 1 }, "quantity": 1, "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price })
  //   // }
  //   if (shoeCheck === undefined) {
  //     this.selectedShoes.push({ "size": size, "quantity": 1, "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price })
  //   }
  //   else {
  //     const newSize = shoeCheck.size;


  //     if (newSize.includes([size])) {
  //       shoeCheck.quantity++;
  //     }
  //     else {
  //       this.selectedShoes.push({ "size": size, "quantity": 1, "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price })

  //     }

  //     // else {
  //     //   this.selectedShoes.push({ "size": size, "quantity": 1, "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price })

  //     // }
  //     console.log("show shoeCheck.size ", shoeCheck["size"])
  //     console.log("show newSize ", shoeCheck.hasOwnProperty("size"))

  //   }
  //   console.log("show index ", shoeCheck)
  //   console.log("show selectedShoe ", this.selectedShoes)
  // }
  addToCart(shoe: any, size: any) {
    const sizeShoe = Number(size);
    const shoeIndex = this.selectedShoes.findIndex(s => s.id === shoe.id && s.size.includes(sizeShoe));
    if (shoeIndex >= 0) {
      this.selectedShoes[shoeIndex].quantity++;
    } else {
      this.selectedShoes.push({ size, "quantity": 1, "id": shoe.id, "name": shoe.name, "image": shoe.image, "price": shoe.price })
    }
    // this.selectedShoes.push(shoe);
    console.log("show", this.selectedShoes)
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
