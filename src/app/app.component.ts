import { Component } from '@angular/core';
import {Pizza} from './model/pizza';
import {PizzaListService} from './pizza-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Tonio!';
  currentPizza: Pizza;

  constructor(private pizzaList: PizzaListService) {
    this.currentPizza = this.pizzaList.pizze[0];
  }

  setCurrent(pizza: Pizza) {
    this.currentPizza = pizza;
  }

  add(pizza: Pizza) {
    this.pizzaList.pizze.push(pizza);
  }
}
