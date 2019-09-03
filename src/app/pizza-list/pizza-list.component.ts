import { Component, OnInit } from '@angular/core';
import {Pizza} from '../model/pizza';
import {pizze} from '../data/pizza-data';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizze: Pizza[] = [];

  constructor() { }

  ngOnInit() {
    this.pizze = pizze;
  }

}
