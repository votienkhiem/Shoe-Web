import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'details/:shoeId', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
