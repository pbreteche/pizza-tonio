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

  constructor() { }

  ngOnInit() {
    this.pizze = pizze;
  }

  select(pizza: Pizza) {
    this.pizzaSelected.emit(pizza);
  }
}
