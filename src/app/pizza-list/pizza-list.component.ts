import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';
import {FilterService} from '../filter.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  filteredPizze: Pizza[] = [];

  constructor(
    private pizzaList: PizzaListService,
    private filter: FilterService
  ) { }

  ngOnInit() {
    this.getFilteredPizze();
  }

  setVegeFilter(filter: string) {
    this.filter.value = filter;
    this.getFilteredPizze();
  }

  private getFilteredPizze() {
    this.pizzaList.getFilteredPizze(this.filter.value).subscribe(pizze => this.filteredPizze = pizze);
  }
}
