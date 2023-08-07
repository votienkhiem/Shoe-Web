import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  shoes: Shoe | undefined;
  faPlus = faPlus;
  faMinus = faMinus;
  selected: string = '';


  submitSize: FormGroup = new FormGroup({
    size: new FormControl(null, Validators.required)
  })

  constructor(
    private route: ActivatedRoute,
    private shoeService: ShoeingService,
    private cart: CartService,
    private data: DataService
  ) {
    // First get the product id from the current route
    const routeParams = parseInt(this.route.snapshot.params['shoeId'], 10);
    this.shoeService.getShoeById(routeParams).then(arrShoes => {
      this.shoes = arrShoes
    })
  }

  addToCart(shoe: Shoe, selS: any): void {
    if (this.submitSize.valid) {
      this.cart.addToCart(shoe, selS);
      this.data.changeData({
        quantity: this.cart.getCartTotalQuantity()
      })
    }
  }
  // get sessionStorage
  // a: any;
  // getShoeTest(): any {
  //   return this.a = JSON.parse(sessionStorage.getItem("cartSession") || '{}');
  // }
  ngOnInit(): void {

  }


}
