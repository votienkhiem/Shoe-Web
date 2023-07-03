import { Component } from '@angular/core';
interface carouselImage {
  imgSrc: string,
  imgAlt: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: carouselImage[] = [
    {
      imgSrc: 'assets/images/1.jpg',
      imgAlt: 'picture1'
    },
    {
      imgSrc: 'assets/images/2.jpg',
      imgAlt: 'picture2'
    },
    {
      imgSrc: 'assets/images/3.jpg',
      imgAlt: 'picture3'
    },
    {
      imgSrc: 'assets/images/4.jpg',
      imgAlt: 'picture4'
    }]
}
