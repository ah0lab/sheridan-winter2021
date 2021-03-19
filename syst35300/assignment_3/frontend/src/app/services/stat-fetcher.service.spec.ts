import { TestBed } from '@angular/core/testing';

import { StatFetcherService } from './stat-fetcher.service';

describe('StatFetcherService', () => {
  let service: StatFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
