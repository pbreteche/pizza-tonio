import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaEditedService {

  private pizzaSubject = new Subject<Pizza>();

  get pizza(): Observable<Pizza> {
    return this.pizzaSubject.asObservable();
  }

  set(pizza: Pizza) {
    this.pizzaSubject.next(pizza);
  }
}
