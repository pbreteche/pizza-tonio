import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';
import {PizzaListService} from './pizza-list.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaCurrentService {
  pizza: Pizza = new Pizza();

  constructor(pizzaList: PizzaListService) {
    if (pizzaList.pizze.length) {
      this.pizza = pizzaList.pizze[0];
    } else {
      pizzaList.pizzePromise.then(pizze => this.pizza = pizze[0]);
    }
  }
}
