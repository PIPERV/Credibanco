import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  item: any;
  data: any = "";
  details: any;
  quantity: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productsService: UsersService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.item = this.route.snapshot.paramMap.get('parametro');
    this.showProducts('title', this.item);
    this.getData();
  }

  showProducts(typeSearch:string, event: any) {
    this.productsService.filterBy(typeSearch, event).subscribe((data) => {
      this.details = data;
    })
  }

  async getData() {
    this.data = await this.localStorageService.getItem('cart');
    this.data === null ? this.defaultData() : "";
  }

  defaultData(): void {
      const data = [{ title: '', quantity: 0, image: '', cost: 0}];
      this.localStorageService.setItem('cart', data);
      this.getData();
  }

  saveData(): void {
    let j: number = 0
    let find: boolean = false;
    for(let i = 0; i < this.data.length; i++){
      j++;
      if(this.details[0].title === this.data[i].title){
        this.data[i].quantity = this.quantity;
        find = true;
      }
    }
    if(find === false) {
      const insert: any = { title: this.details[0].title, quantity: this.quantity, image: this.details[0].images[0], cost: this.details[0].price };
      this.data[j] = insert;
    }
    if(this.data[0].title === ''){
      this.deleteItem();
    }
    this.localStorageService.setItem('cart', this.data);
  }

  deleteItem() {
    const removeItem = { title: '' };
    let data = this.data
    data = data.filter( (ob: any) => ob.title !== removeItem.title);
    this.localStorageService.setItem('cart', data);
    this.getData();
  }

  modifyQuantity(event: number) {
    this.quantity = event;
    this.saveData();
  }
}
