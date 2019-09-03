import { Component, OnInit } from '@angular/core';
import {Pizza} from '../model/pizza';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {

  pizza = new Pizza();

  constructor() { }

  ngOnInit() {
    this.pizza.name = 'Marinara';
    this.pizza.ingredients = ['tomato', 'basil', 'garlic', 'oregano'];
    this.pizza.price = 9;
    this.pizza.veganFriendly = true;
  }

}
