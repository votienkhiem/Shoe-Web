import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './Main/page/page-not-found/page-not-found.component';
import { managerGuard } from './shared/guards/manager.guard';
import { ContactComponent } from './Main/page/contact/contact.component';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./Main/page/home/home.module').then(m => m.HomeModule) },
  { path: 'product', loadChildren: () => import('./Main/page/product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./Main/page/cart/cart.module').then(m => m.CartModule) },
  { path: 'search', loadChildren: () => import('./Main/page/search/search.module').then(m => m.SearchModule) },
  {
    path: 'admin', loadChildren: () => import('./Main/page/admin/admin.module').then(m => m.AdminModule),
    canActivate: [managerGuard]
  },
  { path: 'login', loadChildren: () => import('./Main/page/login/login.module').then(m => m.LoginModule) },
  { path: 'payment', loadChildren: () => import('./Main/page/payment/payment.module').then(m => m.PaymentModule) },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
