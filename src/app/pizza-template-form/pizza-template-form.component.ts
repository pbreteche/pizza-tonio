import {Component, OnInit} from '@angular/core';
import {Pizza, Topping} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-pizza-template-form',
  templateUrl: './pizza-template-form.component.html',
  styleUrls: ['./pizza-template-form.component.scss']
})
export class PizzaTemplateFormComponent implements OnInit {

  newPizza = new Pizza();
  editMode: boolean;
  newTopping = new Topping();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pizzaList: PizzaListService
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.editMode = data.editMode;
      if (!data.editMode) { return; }
      this.route.parent.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.pizzaList.findByName(params.get('name'))
        )
      ).subscribe((pizza: Pizza) => this.newPizza = pizza);
    });
  }

  submit() {
    if (!this.editMode) {
      this.pizzaList.add(this.newPizza);
    }
    this.router.navigate(['../..', this.newPizza.name.toLowerCase()], {relativeTo: this.route});
  }

  addTopping() {
    this.newPizza.toppings.push(this.newTopping);
    this.newTopping = new Topping();
  }
}
