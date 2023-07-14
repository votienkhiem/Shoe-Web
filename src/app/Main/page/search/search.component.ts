import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
}
