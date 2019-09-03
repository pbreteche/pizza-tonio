import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pizza} from '../model/pizza';
import {pizze} from '../data/pizza-data';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizze: Pizza[] = [];
  @Output()
  pizzaSelected = new EventEmitter<Pizza>();
  currentPizza: Pizza;

  constructor() { }

  ngOnInit() {
    this.pizze = pizze;
    this.currentPizza = pizze[0];
  }

  select(pizza: Pizza) {
    this.currentPizza = pizza;
    this.pizzaSelected.emit(pizza);
  }
}
