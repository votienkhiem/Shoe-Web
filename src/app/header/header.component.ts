import { Component, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Shoe } from 'src/shoe';
import { CartService } from '../service/cart.service';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // icon
  faSearch = faSearch;
  faUser = faUser;
  faCartPlus = faCartPlus;
  faAngleRight = faAngleRight;
  // quantity cart
  totalQuantity: number = 0;
  constructor(
    private cart: CartService,
    private data: DataService,
    private router: Router
  ) { }
  private subscription = new Subscription()
  ngOnInit(): void {
    this.subscription = this.data.getData.subscribe((res: any) => {
      this.totalQuantity = res.quantity
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  shoeMen(): void {
    this.router.navigate(['/product'], { queryParams: { category: 'menShoe' } })
  }
  // shoeWomen(): void {
  //   this.router.navigate(['/product'], { queryParams: { category: 'womenShoe' } })
  // }
}
