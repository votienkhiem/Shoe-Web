import { Component, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
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
  faArrowCircleLeft = faArrowCircleLeft
  faArrowCircleRight = faArrowCircleRight

  selectedIndex = 0;
  @Input() images: carouselImage[] = []
  @Input() indicators = true
  @Input() controls = true
  @Input() autoSlide = false
  @Input() slideInterval = 3000

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }
  selectedImage(i: number): void {
    this.selectedIndex = i
  }
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1
    }
    else {
      this.selectedIndex--
    }
  }
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex++
    }
  }
}
