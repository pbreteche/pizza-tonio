import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';
import {PizzaListService} from './pizza-list.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaCurrentService {
  pizza: Pizza = new Pizza();

  constructor(pizzaList: PizzaListService) {
    pizzaList.pizze.subscribe(pizze => this.pizza = pizze.length ? pizze[0] : new Pizza());
  }
}
