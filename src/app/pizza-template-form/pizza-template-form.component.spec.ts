import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTemplateFormComponent } from './pizza-template-form.component';
import {FormsModule} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, convertToParamMap, ParamMap} from '@angular/router';
import {Pizza} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';
import {RouterTestingModule} from '@angular/router/testing';

class ActivatedRouteStub {
  private dataSubject = new BehaviorSubject({ editMode: true});
  readonly data = this.dataSubject.asObservable();

  readonly parent = new (class {
    subject = new BehaviorSubject<ParamMap>(convertToParamMap({ name: 'Margherita'}));
    readonly paramMap = this.subject.asObservable();
  })();
}

class PizzaListServiceStub {
  findByName(name: string): Observable<Pizza> {
    return new BehaviorSubject<Pizza>(
      {price: 0, toppings: [], veganFriendly: false, name: 'Margherita' }
    ).asObservable();
  }
}

describe('PizzaTemplateFormComponent', () => {
  let component: PizzaTemplateFormComponent;
  let fixture: ComponentFixture<PizzaTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ PizzaTemplateFormComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: PizzaListService, useClass: PizzaListServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
