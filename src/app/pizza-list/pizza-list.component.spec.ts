import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListComponent } from './pizza-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BehaviorSubject, Observable} from 'rxjs';
import {Pizza} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';

class PizzaListServiceStub {
  getFilteredPizze(filter): Observable<Pizza[]> {
    return new BehaviorSubject<Pizza[]>(
      [{price: 0, toppings: [], veganFriendly: false, name: 'Margherita' }]
    ).asObservable();
  }
}

describe('PizzaListComponent', () => {
  let component: PizzaListComponent;
  let fixture: ComponentFixture<PizzaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PizzaListComponent ],
      providers: [
        { provide: PizzaListService, useClass: PizzaListServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
