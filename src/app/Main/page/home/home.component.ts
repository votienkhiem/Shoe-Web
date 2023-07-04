import { Component } from '@angular/core';
import { Shoe } from 'src/shoe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    {
      imgSrc: 'assets/images/img1.jpg',
      imgAlt: 'picture1'
    },
    {
      imgSrc: 'assets/images/img2.jpg',
      imgAlt: 'picture2'
    },
    {
      imgSrc: 'assets/images/img3.jpg',
      imgAlt: 'picture4'
    },
    {
      imgSrc: 'assets/images/img4.jpg',
      imgAlt: 'picture4'
    },
    {
      imgSrc: 'assets/images/img5.jpg',
      imgAlt: 'picture4'
    },
  ]
}
