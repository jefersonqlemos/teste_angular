import { TestBed } from '@angular/core/testing';

import { RepositoryCartService } from './repository-cart.service';

describe('RepositoryCartService', () => {
  let service: RepositoryCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
