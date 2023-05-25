import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  item: any;
  details: any;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productsService: UsersService
  ) { }

  ngOnInit(): void {
    this.item = this.route.snapshot.paramMap.get('parametro');
    this.showProducts('title', this.item);
  }

  showProducts(typeSearch:string, event: any) {
    this.productsService.filterBy(typeSearch, event).subscribe((data) => {
      this.details = data;
    })
  }

  goToHome() {
    this.router.navigateByUrl("")
  }

}
