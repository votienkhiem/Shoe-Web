import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './Main/page/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./Main/page/home/home.module').then(m => m.HomeModule) },
  { path: 'product', loadChildren: () => import('./Main/page/product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./Main/page/cart/cart.module').then(m => m.CartModule) },
  { path: 'search', loadChildren: () => import('./Main/page/search/search.module').then(m => m.SearchModule) },
  { path: 'admin', loadChildren: () => import('./Main/page/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./Main/page/login/login.module').then(m => m.LoginModule) },
  { path: 'payment', loadChildren: () => import('./Main/page/payment/payment.module').then(m => m.PaymentModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  // { path: '**', loadChildren: () => import('./Main/page/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
