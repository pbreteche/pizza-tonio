import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  filteredPizze: Pizza[] = [];

  constructor(
    private pizzaList: PizzaListService,
  ) { }

  ngOnInit() {
    this.pizzaList.getFilteredPizze('all').subscribe(pizze => this.filteredPizze = pizze);
  }

  select(pizza: Pizza) {
  }

  setVegeFilter(filter: string) {
    this.pizzaList.getFilteredPizze(filter).subscribe(pizze => {
      this.filteredPizze = pizze;
    });
  }
}
