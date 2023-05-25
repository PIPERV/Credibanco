import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  products = [
    { id: 1, name: 'Producto 1', image: 'imagen1.jpg' },
    { id: 2, name: 'Producto 2', image: 'imagen2.jpg' },
    { id: 3, name: 'Producto 3', image: 'imagen3.jpg' },
    // Agrega más productos según sea necesario
  ];

  slideOffset: number = 0;
  slideWidth: any = 0;
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.slideWidth = document.querySelector('.product')?.clientWidth;
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.slideOffset += this.slideWidth;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
      this.slideOffset -= this.slideWidth;
    }
  }

}
