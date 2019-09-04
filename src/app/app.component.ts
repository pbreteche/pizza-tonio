import { Component } from '@angular/core';
import {Pizza} from './model/pizza';
import {pizze} from './data/pizza-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Tonio!';
  currentPizza = pizze[0];

  setCurrent(pizza: Pizza) {
    this.currentPizza = pizza;
  }

  add(pizza: Pizza) {
    pizze.push(pizza);
  }
}
