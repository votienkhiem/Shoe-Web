import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './Main/page/page-not-found/page-not-found.component';
import { HomeComponent } from './Main/page/home/home.component';
import { ProductComponent } from './Main/page/product/product.component';
import { ProductDetailsComponent } from './Main/page/product-details/product-details.component';
import { CartComponent } from './Main/page/cart/cart.component';
import { CarouselComponent } from './Main/page/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './Main/page/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CarouselComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
