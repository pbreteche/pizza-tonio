import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTemplateFormComponent } from './pizza-template-form.component';

describe('PizzaTemplateFormComponent', () => {
  let component: PizzaTemplateFormComponent;
  let fixture: ComponentFixture<PizzaTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaTemplateFormComponent ]
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
