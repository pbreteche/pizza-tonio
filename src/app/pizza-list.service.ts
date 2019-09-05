import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaListService {
  pizze: Pizza[] = [];
  pizzePromise: Promise<Pizza[]>;

  constructor(private http: HttpClient) {
    this.load();
  }

  private load() {
    this.pizzePromise =  this.http.get('/assets/pizza.json')
      .toPromise() as Promise<Pizza[]>;
    this.pizzePromise.then(
      (pizze: Pizza[]) => pizze.forEach(pizza => this.pizze.push(pizza))
    );
  }
}
