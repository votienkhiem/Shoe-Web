import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';

const routes: Routes = [{
  path: '', children: [
    { path: '', component: AdminComponent },
    { path: 'add', component: ProductAddComponent },
    { path: 'edit/:id', component: ProductEditComponent },
    // { path: 'edit/:id', loadChildren: () => import('./product/product-edit/product-edit.module').then(m => m.ProductEditModule) },
    // { path: 'add', loadChildren: () => import('./product/product-add/product-add.module').then(m => m.ProductAddModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
