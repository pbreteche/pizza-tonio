import {Component} from '@angular/core';
import {PizzaCurrentService} from '../pizza-current.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent {

  constructor(private pizzaCurrent: PizzaCurrentService) {
  }

  get pizza() {
    return this.pizzaCurrent.pizza;
  }
}
