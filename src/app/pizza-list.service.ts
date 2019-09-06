import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaListService {
  private pizzeSubject: BehaviorSubject<Pizza[]>;
  private pizzeBuffer: Pizza[] = [];

  constructor(private http: HttpClient) {
    this.pizzeSubject = new BehaviorSubject<Pizza[]>([]);
    this.load();
  }

  private load() {
    this.http.get('/assets/pizza.json')
      .subscribe(
        (pizze: Pizza[]) => {
          this.pizzeBuffer = pizze;
          this.pizzeSubject.next(pizze);
        }
    );
  }

  get pizze(): Observable<Pizza[]> {
    return this.pizzeSubject.asObservable();
  }

  getFilteredPizze(vegeFilter: string): Observable<Pizza[]>  {
    return this.pizze.pipe(
      map(pizze => pizze.filter(pizza => {
        return vegeFilter === 'all' ||
          (pizza.veganFriendly && vegeFilter === 'vege') ||
          (!pizza.veganFriendly && vegeFilter === 'no-vege');
      }))
    );
  }

  add(newPizza: Pizza) {
    // ajout «a priori» de la nouvelle pizza dans la liste
    this.pizzeBuffer.push(newPizza);
    this.pizzeSubject.next(this.pizzeBuffer);
    // envoi de la nouvelle pizza au serveur
    /*
    this.http.post('/assets/pizza.json', newPizza).subscribe(
      value => null, err => {
        console.log('cannot upload pizza', newPizza);
        // en cas d'erreur, on efface de la liste la nouvelle pizza
        const index = this.pizzeBuffer.indexOf(newPizza);
        this.pizzeBuffer.splice(index, 1);
        this.pizzeSubject.next(this.pizzeBuffer);
      }
    );
    */
  }

  findByName(name: string): Observable<Pizza> {
    console.log(name);
    return this.pizze.pipe(
      map(pizze => pizze.find(elt => elt.name.toLowerCase() === name))
    );
  }
}
