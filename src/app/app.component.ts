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

  constructor(private pizzaList: PizzaListService) {
  }

  add(pizza: Pizza) {
    this.pizzaList.pizze.push(pizza);
  }
}
