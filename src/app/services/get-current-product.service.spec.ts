import { TestBed } from '@angular/core/testing';

import { GetCurrentProductService } from './get-current-product.service';

describe('GetCurrentProductService', () => {
  let service: GetCurrentProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCurrentProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
