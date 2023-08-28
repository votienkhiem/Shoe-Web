import { Component, HostListener } from '@angular/core';
import { Shoe } from 'src/shoe';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isA = false;
  isB = false;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faTruckFast = faTruckFast;
  faArrowsSpin = faArrowsSpin;
  faBoxes = faBoxes;
  scrollY: number = 0;
  faChevronUp = faChevronUp;
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
  constructor(private router: Router) { }

  @HostListener('window:scroll', ['$event'])
  scrollDoCheck() {
    if (window.scrollY > 500) {
      this.isA = true;
    } else {
      this.isA = false;
    }
  }

  scrollToTop(): void {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  shoeMen(): void {
    this.router.navigate(['/product'], { queryParams: { category: 'menShoe' } })
  }
  womenShoe(): void {
    this.router.navigate(['/product'], { queryParams: { category: 'womenShoe' } })
  }
}
