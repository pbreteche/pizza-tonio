import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../model/pizza';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {

  @Input()
  pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
