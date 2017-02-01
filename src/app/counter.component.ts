import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs: ["counterChange"],
  inputs: ["counter"],
  template: `
    <p>
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue: number = 0;
  counterChange: EventEmitter<number>;
  constructor() {
      this.counterChange = new EventEmitter<number>();
  }

  increase() {
    this.counterValue++;
this.counterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  set counter(counter:number){
    this.counterValue = counter;
  }

  ngOnInit() {
  }

}
