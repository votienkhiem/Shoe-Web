import { Component } from '@angular/core';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  shoes: Shoe[] = [];

  constructor(private shoeService: ShoeingService) {
    this.shoeService.getAllShoes().then((arrShoes: Shoe[]) => {
      this.shoes = arrShoes
    });
  }




}
