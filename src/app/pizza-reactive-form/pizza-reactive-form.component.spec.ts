import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaReactiveFormComponent } from './pizza-reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Pizza} from '../model/pizza';
import {PizzaListService} from '../pizza-list.service';

class PizzaListServiceStub {
  add(pizza: Pizza){}
}

describe('PizzaReactiveFormComponent', () => {
  let component: PizzaReactiveFormComponent;
  let fixture: ComponentFixture<PizzaReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ PizzaReactiveFormComponent ],
      providers: [{ provide: PizzaListService, useClass: PizzaListServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
