import { TestBed } from '@angular/core/testing';

import { PizzaListService } from './pizza-list.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PizzaListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PizzaListService = TestBed.get(PizzaListService);
    expect(service).toBeTruthy();
  });
});
