import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from '../carousel/carousel.component';




@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
  ]
})
export class HomeModule { }
