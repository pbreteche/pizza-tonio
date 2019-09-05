import { TestBed } from '@angular/core/testing';

import { PizzaCurrentService } from './pizza-current.service';

describe('PizzaCurrentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaCurrentService = TestBed.get(PizzaCurrentService);
    expect(service).toBeTruthy();
  });
});
