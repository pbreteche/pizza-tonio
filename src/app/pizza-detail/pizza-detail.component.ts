import {Component, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PizzaListService} from '../pizza-list.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaList: PizzaListService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.pizzaList.findByName(params.get('name'))
      )
    ).subscribe((pizza: Pizza) => this.pizza = pizza);
  }

  get toppings() {
    return this.pizza.toppings.map(top => top.name);
  }
}
