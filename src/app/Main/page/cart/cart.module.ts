import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { KeyvaluePipe } from 'src/app/pipe/keyvalue.pipe';



@NgModule({
  declarations: [CartComponent, KeyvaluePipe],
  imports: [
    CommonModule,
    CartRoutingModule,
    FontAwesomeModule,
    FormsModule,

  ]
})
export class CartModule { }
