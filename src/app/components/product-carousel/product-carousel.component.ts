import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  products: any = [];
  constructor(
    private productsService: UsersService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  goToDetails(item: string) {
    const parametro: any = item;
    this.route.navigate(['product-details', parametro]);
  }
}
