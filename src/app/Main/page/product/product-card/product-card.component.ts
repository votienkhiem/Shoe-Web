import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faCaretDown, faXmark, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  // shoes: Shoe[] = [];

  faCaretDown = faCaretDown;
  faXmark = faXmark;
  faMinus = faMinus;
  public approve: boolean = true;
  public selected: string = '';
  public page: number = 1;
  public selectedSort: string = '';

  @Input() title: string | undefined;
  // @Input() filterMen: any;
  @Input() shoes: any;

  submitSize: FormGroup = new FormGroup({
    size: new FormControl(null, Validators.required)
  })



  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
    private data: DataService
  ) {
    // this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
    //   this.shoes = arrShoes
    // });
  }
  addToCart(shoe: Shoe, selS: any): void {
    // window.alert("Your product has been added to the cart!")
    if (this.submitSize.valid) {
      this.cart.addToCart(shoe, selS);
      this.data.changeData({
        quantity: this.cart.getCartTotalQuantity()
      })
    }
  }
  ngOnInit() {
    this.data.changeData({
      quantity: this.cart.getCartTotalQuantity(),
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

  sortAZ(): void {
    switch (this.selectedSort) {
      case "": {
        this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
          this.shoes = arrShoes
        });
        break;
      }
      case "AtoZ": {
        this.shoes.sort((s1: { name: string; }, s2: { name: string; }) => {
          return s1.name > s2.name ? 1 : -1
        })
        break;
      }
      case "ZtoA": {
        this.shoes.sort((s1: { name: string; }, s2: { name: string; }) => {
          return s1.name > s2.name ? -1 : 1
        })
        break;
      }
      case "PriceLowToHigh": {
        this.shoes.sort((p1: { price: number; }, p2: { price: number; }) => {
          return p1.price > p2.price ? 1 : -1;
        })
        break;
      }
      case "PriceHighToLow": {

        this.shoes.sort((s1: { price: number; }, s2: { price: number; }) => {
          return s1.price > s2.price ? -1 : 1
        })
        break;
      }
    }
  }
}
