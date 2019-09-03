import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pizza} from '../model/pizza';
import {pizze} from '../data/pizza-data';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizze: Pizza[] = [];
  filteredPizze: Pizza[] = [];
  @Output()
  pizzaSelected = new EventEmitter<Pizza>();
  currentPizza: Pizza;
  vegeFilter = 'all';

  constructor() { }

  ngOnInit() {
    this.pizze = pizze;
    this.filteredPizze = pizze;
    this.currentPizza = pizze[0];
  }

  private pizzeFilter() {
    this.filteredPizze = this.pizze.filter(pizza => {
      return this.vegeFilter === 'all' ||
        (pizza.veganFriendly && this.vegeFilter === 'vege') ||
        (!pizza.veganFriendly && this.vegeFilter === 'no-vege');
    });

    if (this.filteredPizze.indexOf(this.currentPizza) === -1) {
      this.select(this.filteredPizze[0]);
    }
  }

  select(pizza: Pizza) {
    this.currentPizza = pizza;
    this.pizzaSelected.emit(pizza);
  }

  setVegeFilter(value: string) {
    this.vegeFilter = value;
    this.pizzeFilter();
  }
}
