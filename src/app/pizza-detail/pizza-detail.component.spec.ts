import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { PizzaDetailComponent } from './pizza-detail.component';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {ActivatedRoute, convertToParamMap, ParamMap} from '@angular/router';
import {Pizza} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';

class ActivatedRouteStub {
  private subject = new BehaviorSubject<ParamMap>(convertToParamMap({ name: 'margherita'}));
  readonly paramMap = this.subject.asObservable();
}

class PizzaListServiceStub {
  findByName(name: string): Observable<Pizza> {
    return new BehaviorSubject<Pizza>(
      {price: 0, toppings: [], veganFriendly: false, name: 'Margherita' }
      ).asObservable();
  }
}

describe('PizzaDetailComponent', () => {
  let component: PizzaDetailComponent;
  let fixture: ComponentFixture<PizzaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: PizzaListService, useClass: PizzaListServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Margherita pizza', fakeAsync(() => {
    expect(component.pizza.name).toBe('Margherita');
  }));
});
