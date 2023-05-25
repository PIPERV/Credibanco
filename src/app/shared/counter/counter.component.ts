import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() finalQuantity: EventEmitter<number> = new EventEmitter<number>;
  
  constructor() { }

  ngOnInit(): void {
  }

  selectAdd() {
    this.counter ++;
    this.finalQuantity.emit(this.counter);
  }

  selectSubstract() {
    this.counter > 0 ?  this.counter -- : "";
    this.finalQuantity.emit(this.counter);
  }

}
