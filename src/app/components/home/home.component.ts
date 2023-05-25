import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any = []

  constructor( 
    private productsService: UsersService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  selectItem(item: any){
    console.log(item);
    this.goToDetails(item);
  }

  showProducts(typeSearch:string, event: any) {
    this.productsService.filterBy(typeSearch, event).subscribe((data) => {
      this.products = data;
    })
  }

  goToDetails(item: string) {
    const parametro: any = item;
    this.route.navigate(['product-details', parametro]);
  }

}
