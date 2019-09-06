import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCenterComponent } from './pizza-center.component';

describe('PizzaCenterComponent', () => {
  let component: PizzaCenterComponent;
  let fixture: ComponentFixture<PizzaCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
