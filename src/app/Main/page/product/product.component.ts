import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  shoes: Shoe[] = [];
  faCaretDown = faCaretDown;
  isShow = false

  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
  ) {
    this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
      this.shoes = arrShoes
    });
  }
  cartSes: any = sessionStorage.getItem("cartSession");
  arrCart = JSON.parse(this.cartSes)
  addToCart(shoe: Shoe): void {
    // window.alert("Your product has been added to the cart!")
    this.cart.addToCart(shoe);
  }

  ngOnInit() {

  }

}
