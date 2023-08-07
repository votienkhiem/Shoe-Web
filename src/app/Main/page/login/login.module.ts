import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SearchModule } from '../search/search.module';
import { SearchComponent } from '../search/search.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { HomeModule } from '../home/home.module';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
