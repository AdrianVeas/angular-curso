import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string [] = ['Spiderman', 'Ironman',
    'Hulk', 'She Hulk', 'Thor'
  ]
  public deletedHero?: string;

  removeLastHeroe(): void{
    this.deletedHero = this.heroName.pop();
  }
}
