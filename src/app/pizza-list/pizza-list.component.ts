import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';
import {PizzaCurrentService} from '../pizza-current.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  filteredPizze: Pizza[] = [];

  constructor(
    private pizzaList: PizzaListService,
    private currentPizza: PizzaCurrentService
  ) { }

  ngOnInit() {
    this.pizzaList.getFilteredPizze('all').subscribe(pizze => this.filteredPizze = pizze);
  }

  select(pizza: Pizza) {
    this.currentPizza.pizza = pizza;
  }

  setVegeFilter(filter: string) {
    this.pizzaList.getFilteredPizze(filter).subscribe(pizze => {
      this.filteredPizze = pizze;
      if (this.filteredPizze.indexOf(this.currentPizza.pizza) === -1) {
        this.currentPizza.pizza = this.filteredPizze[0];
      }
    });
  }
}
