import {Component} from '@angular/core';
import {PizzaCurrentService} from '../pizza-current.service';
import {PizzaEditedService} from '../pizza-edited.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent {

  constructor(
    private pizzaCurrent: PizzaCurrentService,
    private pizzaEdited: PizzaEditedService
  ) { }

  get pizza() {
    return this.pizzaCurrent.pizza;
  }

  get toppings() {
    return this.pizza.toppings.map(top => top.name);
  }

  edit() {
    this.pizzaEdited.set(this.pizza);
  }
}
