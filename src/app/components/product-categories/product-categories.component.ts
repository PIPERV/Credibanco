import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  
  categories: any = []
  @Output() category = new EventEmitter<string>();
  
  constructor(
    private productsService: UsersService,

  ) { }

  ngOnInit(): void {
    this.getAllCategories();    
  }

  getAllCategories(){
    this.productsService.getCategories().subscribe((data) =>{
      this.categories = data;
    })
  }

  openCategory(event: any){ 
    this.category.emit(event);
  }

}
