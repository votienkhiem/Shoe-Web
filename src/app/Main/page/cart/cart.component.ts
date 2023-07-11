import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Shoe } from 'src/shoe';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faTrash = faTrash;
  items = this.cart.getShoes();
  // numCart: number | undefined = 0;
  constructor(private cart: CartService) { }
  // ngOnInit(): void {
  //   this.numCart = this.items.length;
  // }
  total(): number {
    let totals: number = 0;
    this.items.forEach(item => totals += item.price * item.quantity);
    return totals;
  }
  totalProductQuantity(): number {
    let totalQuantity: number = 0;
    this.items.forEach(item => totalQuantity += item.quantity);
    return totalQuantity;
  }
  minus(): number {
    let totalQuantity: number = 0;
    this.items.forEach(item => totalQuantity = item.quantity--);
    return totalQuantity
  }
  deleteProduct(index: number): void {
    this.items.splice(index, 1)
  }
}
