import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  public cardShoe = this.cart.getSelectedShoe();
  public paymentF: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    note: new FormControl('', Validators.required),
  });
  constructor(private cart: CartService) { }
  onSubmit(): void {
    console.log("submit success")
  }
  total(): number {
    let totals: number = 0;
    this.cardShoe.forEach(item => totals += item.price * item.quantity);
    return totals;
  }
}
