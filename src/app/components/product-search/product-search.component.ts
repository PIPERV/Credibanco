import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  timeout: any;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  searchFilter(event: string){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
         this.search.emit(event);
      }, 800);
  }

}
