import { TestBed } from '@angular/core/testing';

import { PizzaListService } from './pizza-list.service';

describe('PizzaListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaListService = TestBed.get(PizzaListService);
    expect(service).toBeTruthy();
  });
});
