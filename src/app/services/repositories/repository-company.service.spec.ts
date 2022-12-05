import { TestBed } from '@angular/core/testing';

import { RepositoryCompanyService } from './repository-company.service';

describe('RepositoryCompanyService', () => {
  let service: RepositoryCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
