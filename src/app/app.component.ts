import { Component } from '@angular/core';
import {Pizza} from './model/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Tonio!';
  currentPizza: Pizza;

  setCurrent(pizza: Pizza) {
    this.currentPizza = pizza;
  }
}
