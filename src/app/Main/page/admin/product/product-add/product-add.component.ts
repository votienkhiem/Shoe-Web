import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  public addF: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    quantity: new FormControl('1', Validators.required),
    brand: new FormControl('', Validators.required),
    status: new FormControl('Status', Validators.required),
    gender: new FormControl('Gender', Validators.required),
    detail: new FormControl('', Validators.required),
    history: new FormControl('', Validators.required),
    color: new FormControl('Color', Validators.required),
    size: new FormControl('', Validators.required),
  })

  constructor(
    private crud: CrudService,
    private router: Router
  ) { }
  addSubmit(): void {
    if (this.addF.valid) {
      this.crud.add(this.addF.value).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/admin'])
        // console.log(this.addF.value);
      })
    }
  }
}
