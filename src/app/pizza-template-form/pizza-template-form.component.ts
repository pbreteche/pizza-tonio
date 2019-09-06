import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pizza, Topping} from '../model/pizza';
import {PizzaCurrentService} from '../pizza-current.service';
import {PizzaListService} from '../pizza-list.service';
import {PizzaEditedService} from '../pizza-edited.service';
import {Form, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pizza-template-form',
  templateUrl: './pizza-template-form.component.html',
  styleUrls: ['./pizza-template-form.component.scss']
})
export class PizzaTemplateFormComponent implements OnInit {

  newPizza = new Pizza();
  editMode = false;
  newTopping = new Topping();
  constructor(
    private currentPizza: PizzaCurrentService,
    private pizzaList: PizzaListService,
    private pizzaEdited: PizzaEditedService
  ) {
    this.pizzaEdited.pizza.subscribe(pizza => {
      this.newPizza = pizza;
      this.editMode = true;
    });
  }

  ngOnInit() {
  }

  add() {
    if (!this.editMode) {
      this.currentPizza.pizza = this.newPizza;
      this.pizzaList.add(this.newPizza);
    }
    this.editMode = false;
    this.newPizza = new Pizza();
  }

  addTopping() {
    this.newPizza.toppings.push(this.newTopping);
    this.newTopping = new Topping();
  }
}
