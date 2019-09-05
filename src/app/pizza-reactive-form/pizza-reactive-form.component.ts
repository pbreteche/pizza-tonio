import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Pizza} from '../model/pizza';
import {PizzaCurrentService} from '../pizza-current.service';
import {PizzaListService} from '../pizza-list.service';

@Component({
  selector: 'app-pizza-reactive-form',
  templateUrl: './pizza-reactive-form.component.html',
  styleUrls: ['./pizza-reactive-form.component.scss']
})
export class PizzaReactiveFormComponent implements OnInit {

  pizzaForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(5, [Validators.min(5), Validators.required]),
    toppings: new FormArray([])
  });
  newTopping = new FormControl('');

  constructor(
    private currentPizza: PizzaCurrentService,
    private pizzaList: PizzaListService
  ) { }

  ngOnInit() {
  }

  get toppings(): FormArray {
    return this.pizzaForm.get('toppings') as FormArray;
  }

  addTopping() {
    this.toppings.push(new FormControl(this.newTopping.value));
    this.newTopping.reset();
  }

  add() {
    this.currentPizza.pizza = this.pizzaForm.value;
    this.pizzaList.add(this.pizzaForm.value);
    this.pizzaForm.reset();
    (this.pizzaForm.get('toppings') as FormArray).clear();
  }
}
