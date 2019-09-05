import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pizza} from '../model/pizza';
import {PizzaCurrentService} from '../pizza-current.service';
import {PizzaListService} from '../pizza-list.service';

@Component({
  selector: 'app-pizza-template-form',
  templateUrl: './pizza-template-form.component.html',
  styleUrls: ['./pizza-template-form.component.scss']
})
export class PizzaTemplateFormComponent implements OnInit {

  newPizza = new Pizza();
  newTopping = '';
  constructor(
    private currentPizza: PizzaCurrentService,
    private pizzaList: PizzaListService
  ) { }

  ngOnInit() {
  }

  add() {
    this.currentPizza.pizza = this.newPizza;
    this.pizzaList.pizze.push(this.newPizza);
    this.newPizza = new Pizza();
  }

  addTopping() {
    this.newPizza.toppings.push(this.newTopping);
    this.newTopping = '';
  }
}
