import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsRoutingModule } from './product-details-routing.module';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    ProductDetailsRoutingModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductDetailsModule { }
