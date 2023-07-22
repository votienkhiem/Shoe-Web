import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faTrash = faTrash;
  items = this.cart.getShoes();
  sizes = this.cart.getSizes();



  constructor(
    private cart: CartService, private data: DataService) { }
  ngOnInit(): void {
    this.data.changeData({ quantity: this.cart.getCartTotalQuantity() })
  }
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
    this.data.changeData({
      quantity: this.cart.getCartTotalQuantity()
    })
  }
  updateQuantity(index: number, e: any) {
    this.data.changeData({
      quantity: this.cart.getCartTotalQuantity()
    })
  }
}
