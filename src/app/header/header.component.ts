import { Component, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Shoe } from 'src/shoe';
import { CartService } from '../service/cart.service';

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

  constructor(private cart: CartService) { }
  ngOnInit(): void {
  }
}
