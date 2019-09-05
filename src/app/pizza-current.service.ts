import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';
import {PizzaListService} from './pizza-list.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaCurrentService {
  pizza: Pizza;

  constructor(pizzaList: PizzaListService) {
    this.pizza = pizzaList.pizze[0];
  }
}
