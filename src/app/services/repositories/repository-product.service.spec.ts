import { TestBed } from '@angular/core/testing';

import { RepositoryProductService } from './repository-product.service';

describe('RepositoryProductService', () => {
  let service: RepositoryProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
