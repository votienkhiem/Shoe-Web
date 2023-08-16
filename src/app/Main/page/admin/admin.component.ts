import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CrudService } from 'src/app/service/crud.service';
import { DataService } from 'src/app/service/data.service';
import { ShoeingService } from 'src/app/service/shoeing.service';
import { Shoe } from 'src/shoe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  shoes: Shoe[] = [];
  listItems: Array<any> = [];
  public pageNumber: number = 1;


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
  searchItems(text: string): void {
    if (!text) {
      this.shoes = this.listItems
    }
    if (text == '') {
      this.crud.getList().subscribe(res => {
        this.shoes = res;
      })
    }
    this.shoes = this.shoes.filter(data => data.name.toLowerCase().includes(text.toLowerCase()));

  }
  deleteItem(id: number) {
    // if (confirm('Are you sure ?')) {
    //   this.crud.delete(id).subscribe(res => {
    //     this.crud.getList().subscribe(res => {
    //       this.shoes = res;
    //     })
    //   })
    // }
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete the product ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
        this.crud.delete(id).subscribe(res => {
          this.crud.getList().subscribe(res => {
            this.shoes = res;
          })
        })
      }
    })
  }


}
