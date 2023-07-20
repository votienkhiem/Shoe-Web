import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './Main/page/page-not-found/page-not-found.component';
import { HomeComponent } from './Main/page/home/home.component';
import { ProductComponent } from './Main/page/product/product.component';
import { ProductDetailsComponent } from './Main/page/product-details/product-details.component';
import { CartComponent } from './Main/page/cart/cart.component';
import { SearchComponent } from './Main/page/search/search.component';
import { PaymentComponent } from './Main/page/payment/payment.component';
import { AdminComponent } from './Main/page/admin/admin.component';
import { LoginComponent } from './Main/page/login/login.component';
import { ProductEditComponent } from './Main/page/admin/product/product-edit/product-edit.component';
import { ProductAddComponent } from './Main/page/admin/product/product-add/product-add.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'admin', children: [
      { path: '', component: AdminComponent },
      { path: 'edit', component: ProductEditComponent },
      { path: 'add', component: ProductAddComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'products/:shoeId', component: ProductDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
