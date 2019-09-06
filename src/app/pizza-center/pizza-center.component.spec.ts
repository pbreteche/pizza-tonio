import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCenterComponent } from './pizza-center.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PizzaCenterComponent', () => {
  let component: PizzaCenterComponent;
  let fixture: ComponentFixture<PizzaCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PizzaCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
