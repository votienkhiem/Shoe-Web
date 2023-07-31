import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CrudService } from 'src/app/service/crud.service';
import { DataService } from 'src/app/service/data.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  shoes: Shoe[] = [];

  constructor(
    private shoeService: ShoeingService,
    private cart: CartService,
    private data: DataService,
    private crud: CrudService
  ) { }

  ngOnInit(): void {
    this.crud.getList().subscribe(res => {
      this.shoes = res;
    })
  }

}
