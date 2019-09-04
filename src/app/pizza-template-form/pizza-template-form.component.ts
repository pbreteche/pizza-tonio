import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pizza} from '../model/pizza';

@Component({
  selector: 'app-pizza-template-form',
  templateUrl: './pizza-template-form.component.html',
  styleUrls: ['./pizza-template-form.component.scss']
})
export class PizzaTemplateFormComponent implements OnInit {

  newPizza = new Pizza();
  newTopping = '';
  @Output()
  pizzaCreated = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.pizzaCreated.emit(this.newPizza);
    this.newPizza = new Pizza();
  }

  addTopping(event: KeyboardEvent = null) {
    this.newPizza.toppings.push(this.newTopping);
    this.newTopping = '';
  }
}
