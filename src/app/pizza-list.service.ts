import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaListService {
  pizze: Pizza[] = [];
  pizzeObservable: Observable<Pizza[]>;

  constructor(private http: HttpClient) {
    this.load();
  }

  private load() {
    this.pizzeObservable =  this.http.get('/assets/pizza.json') as Observable<Pizza[]>;
    this.pizzeObservable.subscribe(
      (pizze: Pizza[]) => pizze.forEach(pizza => this.pizze.push(pizza))
    );
  }
}
