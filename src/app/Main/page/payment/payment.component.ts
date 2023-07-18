import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  public paymentF: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    note: new FormControl('', Validators.required),
  });
  onSubmit(): void {
    console.log("submit success")
  }
}
