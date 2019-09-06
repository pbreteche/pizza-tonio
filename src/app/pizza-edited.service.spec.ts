import { TestBed } from '@angular/core/testing';

import { PizzaEditedService } from './pizza-edited.service';

describe('PizzaEditedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaEditedService = TestBed.get(PizzaEditedService);
    expect(service).toBeTruthy();
  });
});
