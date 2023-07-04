import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Shoe } from 'src/shoe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cart.getShoes();
  // numCart: number | undefined = 0;
  constructor(private cart: CartService) { }
  // ngOnInit(): void {
  //   this.numCart = this.items.length;
  // }

}
