import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  shoes: Shoe[] = [];
  faCaretDown = faCaretDown;


  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
    private data: DataService
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
    this.data.changeData({
      quantity: this.cart.getCartTotalQuantity()
    })
  }
  ngOnInit() {
    this.data.changeData({
      quantity: this.cart.getCartTotalQuantity()
    })
  }
  selectedShoe?: Shoe;
  onSelected(shoe: Shoe): void {
    // this.selectedShoe = shoe
    let a = this.selectedShoe?.id
    if (a = shoe.id) {


    }
  }

}
