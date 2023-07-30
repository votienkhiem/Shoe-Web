import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  public editF: FormGroup = new FormGroup({
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


  editSubmit(): void {
    if (this.editF.valid) {

      console.log(this.editF.value);
    }
  }
}
