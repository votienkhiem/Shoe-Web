import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    detail: new FormControl('', Validators.required),
    history: new FormControl('', Validators.required),
    color: new FormControl('Color', Validators.required),
    size: new FormControl('', Validators.required),
  })


  addSubmit(): void {
    if (this.addF.valid) {

      console.log(this.addF.value);
    }
  }
}
