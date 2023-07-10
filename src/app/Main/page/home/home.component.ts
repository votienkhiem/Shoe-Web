import { Component } from '@angular/core';
import { Shoe } from 'src/shoe';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faTruckFast = faTruckFast;
  faArrowsSpin = faArrowsSpin;
  faBoxes = faBoxes;
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
