import { TestBed } from '@angular/core/testing';

import { EproductsService } from './eproducts.service';

describe('EproductsService', () => {
  let service: EproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
