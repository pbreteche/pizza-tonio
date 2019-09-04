import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Pizza} from '../model/pizza';

@Component({
  selector: 'app-pizza-reactive-form',
  templateUrl: './pizza-reactive-form.component.html',
  styleUrls: ['./pizza-reactive-form.component.scss']
})
export class PizzaReactiveFormComponent implements OnInit {

  @Output()
  pizzaCreated = new EventEmitter<Pizza>();

  pizzaForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(5, [Validators.min(5), Validators.required]),
    toppings: new FormArray([])
  });
  newTopping = new FormControl('');

  constructor() { }

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
    this.pizzaCreated.emit(this.pizzaForm.value);
    this.pizzaForm.reset();
    (this.pizzaForm.get('toppings') as FormArray).clear();
  }
}
