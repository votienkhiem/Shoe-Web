import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  shoes: Shoe[] = [];
  listEmpty: Array<any> = [];
  faSearch = faSearch;

  enterSearchValue: string = ''
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
    private data: DataService
  ) {
    this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
      this.shoes = arrShoes
    });
  }

  public searchItems(text: string) {
    if (!text) {
      this.shoes = this.listEmpty;
    }
    this.listEmpty = this.shoes.filter(data => data.name.toLowerCase().includes(text.toLowerCase()))
  }
  onSearch(): void {
    this.searchTextChanged.emit(this.enterSearchValue)
  }
  // get from product
  public selected: string = '';
  faXmark = faXmark;
  submitSize: FormGroup = new FormGroup({
    size: new FormControl(null, Validators.required)
  })
  public approve: boolean = true;
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
  // end get from product
}
