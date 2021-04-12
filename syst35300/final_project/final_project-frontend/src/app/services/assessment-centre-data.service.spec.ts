import { TestBed } from '@angular/core/testing';

import { AssessmentCentreDataService } from './assessment-centre-data.service';

describe('AssessmentCentreDataService', () => {
  let service: AssessmentCentreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentCentreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
