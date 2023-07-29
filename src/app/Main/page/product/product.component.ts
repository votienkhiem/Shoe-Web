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
  // listEmpty: Array<any> = [];
  faCaretDown = faCaretDown;
  faXmark = faXmark;
  faMinus = faMinus;

  // public approve: boolean = true;
  // public selected: string = '';
  public page: number = 1;
  // selectedSort: string = ''
  public titleFilter: string = "All Products";
  public isPriceFilteredFiveToTen = false;
  public isPriceFilteredTenToFif = false;
  public isPriceFilteredFifToThirty = false;
  public isPriceFilteredOverThirty = false;


  // submitSize: FormGroup = new FormGroup({
  //   size: new FormControl(null, Validators.required)
  // })

  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
    private data: DataService
  ) {
    this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
      this.shoes = arrShoes
    });
  }

  filterFiveToTen(): void {
    if (this.isPriceFilteredFiveToTen) {
      let filterPrice = this.shoes.filter(res => res.price < 1000);
      this.shoes = filterPrice;
    }
    else {
      this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
        this.shoes = arrShoes
      });
    }

  }
  filterTenToFif(): void {
    if (this.isPriceFilteredTenToFif) {
      let filterPrice = this.shoes.filter(res => res.price > 1000 && res.price < 1500);
      this.shoes = filterPrice;
    }
    else {
      this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
        this.shoes = arrShoes
      });
    }
  }
  filterFifToThirty(): void {
    if (this.isPriceFilteredFifToThirty) {
      let filterPrice = this.shoes.filter(res => res.price > 1500 && res.price < 3000);
      this.shoes = filterPrice;
    }
    else {
      this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
        this.shoes = arrShoes
      });
    }
  }
  filterOverThirty(): void {
    if (this.isPriceFilteredOverThirty) {
      let filterPrice = this.shoes.filter(res => res.price > 3000);
      this.shoes = filterPrice;
    }
    else {
      this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
        this.shoes = arrShoes
      });
    }
  }
  filterMen(): void {
    this.titleFilter = "Men's Shoes";
    let filterMale = this.shoes.filter(res => res.gender === "male");
    this.shoes = filterMale;
  }
  filterWoMen(): void {
    this.titleFilter = "Women's shoes";
    let filterFemale = this.shoes.filter(res => res.gender === "female");
    this.shoes = filterFemale;
  }
  // addToCart(shoe: Shoe, selS: any): void {
  //   // window.alert("Your product has been added to the cart!")
  //   if (this.submitSize.valid) {
  //     this.cart.addToCart(shoe, selS);
  //     this.data.changeData({
  //       quantity: this.cart.getCartTotalQuantity()
  //     })
  //   }

  // }
  // ngOnInit() {
  //   this.data.changeData({
  //     quantity: this.cart.getCartTotalQuantity(),
  //   })
  // }
  // onShow(i: any): void {
  //   const show = document.getElementById(i);

  //   if (show != null) {
  //     show.style.display = 'block';
  //     this.approve = !this.approve;
  //   }
  // }
  // closeShow(i: any): void {
  //   const show = document.getElementById(i);
  //   if (show != null) {
  //     show.style.display = 'none';
  //     this.approve = !this.approve;

  //   }
  // }
  // searchText: string = ''
  // onSearch(event: any) {
  //   this.searchText = event;
  //   console.log("123313", this.searchText = event)
  //   //   if (!text) {
  //   //     this.shoes = this.listEmpty;
  //   //   }
  //   //   this.listEmpty = this.shoes.filter(data => data.name.toLowerCase().includes(text.toLowerCase()))

  //   // if (this.searchText = event) {
  //   //   this.shoes = this.listEmpty;
  //   // }
  //   // this.listEmpty = this.shoes.filter(data => data.name.toLowerCase().includes((this.searchText = event).toLowerCase()))

  //   // console.log('mang search', this.listEmpty)
  // }

  // sortAZ(): void {
  //   switch (this.selectedSort) {
  //     case "AtoZ": {
  //       this.shoes.sort((s1, s2) => {
  //         return s1.name > s2.name ? 1 : -1
  //       })
  //       break;
  //     }
  //     case "ZtoA": {
  //       this.shoes.sort((s1, s2) => {
  //         return s1.name > s2.name ? -1 : 1
  //       })
  //       break;
  //     }
  //     case "PriceLowToHigh": {
  //       this.shoes.sort((p1, p2) => {
  //         return p1.price > p2.price ? 1 : -1;
  //       })
  //       break;
  //     }
  //     case "PriceHighToLow": {

  //       this.shoes.sort((s1, s2) => {
  //         return s1.price > s2.price ? -1 : 1
  //       })
  //       break;
  //     }
  //   }
  // }
}
