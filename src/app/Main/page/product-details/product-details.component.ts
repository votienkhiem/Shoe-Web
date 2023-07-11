import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  shoes: Shoe | undefined
  faPlus = faPlus;
  faMinus = faMinus;

  constructor(
    private route: ActivatedRoute,
    private shoeService: ShoeingService,
    private cart: CartService,
  ) {
    // First get the product id from the current route
    const routeParams = parseInt(this.route.snapshot.params['shoeId'], 10);
    this.shoeService.getShoeById(routeParams).then(arrShoes => {
      this.shoes = arrShoes
    })
  }
  addToCart(shoe: Shoe) {
    this.cart.addToCart(shoe);
    window.alert("Your product has been added to the cart!")
    console.log(shoe)
  }

  ngOnInit(): void {

  }


}
