import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  shoes: Shoe | undefined

  constructor(
    private route: ActivatedRoute,
    private shoeService: ShoeingService,
  ) {
    // First get the product id from the current route
    const routeParams = parseInt(this.route.snapshot.params['id'], 10);
    this.shoeService.getShoeById(routeParams).then(arrShoes => {
      this.shoes = arrShoes
    })
  }
  ngOnInit(): void {
  }
}
