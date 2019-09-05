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
  vegeFilter = 'all';

  constructor(
    private pizzaList: PizzaListService,
    private currentPizza: PizzaCurrentService
  ) { }

  ngOnInit() {
    this.filteredPizze = this.pizzaList.pizze;
  }

  private pizzeFilter() {
    this.filteredPizze = this.pizzaList.pizze.filter(pizza => {
      return this.vegeFilter === 'all' ||
        (pizza.veganFriendly && this.vegeFilter === 'vege') ||
        (!pizza.veganFriendly && this.vegeFilter === 'no-vege');
    });

    if (this.filteredPizze.indexOf(this.currentPizza.pizza) === -1) {
      this.select(this.filteredPizze[0]);
    }
  }

  select(pizza: Pizza) {
    this.currentPizza.pizza = pizza;
  }

  setVegeFilter(value: string) {
    this.vegeFilter = value;
    this.pizzeFilter();
  }
}
