import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/service/data.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  shoes: Shoe[] = [];
  faCaretDown = faCaretDown;
  faXmark = faXmark;
  faMinus = faMinus;
  public approve: boolean = true;
  public selected: string = '';

  submitSize: FormGroup = new FormGroup({
    size: new FormControl(null, Validators.required)
  })

  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
    private data: DataService
  ) {
    this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
      this.shoes = arrShoes
    });
  }


  // addToCart(shoe: Shoe): void {
  //   // window.alert("Your product has been added to the cart!")
  //   if (this.submitSize.valid) {
  //     this.cart.addToCart(shoe);
  //     this.data.changeData({
  //       quantity: this.cart.getCartTotalQuantity()
  //     })
  //   }
  // }
  addToCart(shoe: Shoe, selS: any): void {
    // window.alert("Your product has been added to the cart!")
    if (this.submitSize.valid) {
      this.cart.addToCart(shoe, selS);
      this.data.changeData({
        quantity: this.cart.getCartTotalQuantity()
      })
      console.log(shoe)
      console.log(selS)
    }
  }
  ngOnInit() {
    this.data.changeData({
      quantity: this.cart.getCartTotalQuantity()
    })
  }
  onShow(i: any): void {
    const show = document.getElementById(i);

    if (show != null) {
      show.style.display = 'block';
      this.approve = !this.approve;
    }
  }
  closeShow(i: any): void {
    const show = document.getElementById(i);
    if (show != null) {
      show.style.display = 'none';
      this.approve = !this.approve;

    }
  }

}
