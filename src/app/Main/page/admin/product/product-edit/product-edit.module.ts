import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditRoutingModule } from './product-edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductEditComponent],
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductEditModule { }
