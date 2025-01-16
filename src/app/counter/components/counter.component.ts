import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3>Counter: {{ counter }}</h3>
<button (click)="increaseBy(true)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(false)">-1</button>


  `
})

export class CounterComponent implements OnInit {
  constructor() { }
  public counter: number = 10;

  increaseBy(value: boolean): void{
    if(value){
      this.counter += 1;
    }else{
      this.counter -=1;
    }


  }
  resetCounter(){
    this.counter = 10;
  }


  ngOnInit() { }
}
