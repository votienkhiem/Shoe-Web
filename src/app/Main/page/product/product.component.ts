import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  shoes: Shoe[] = [];

  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
  ) {
    this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
      this.shoes = arrShoes
    });
  }
  addToCart(shoe: Shoe) {
    this.cart.addToCart(shoe);
  }




}
