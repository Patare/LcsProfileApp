import { TestBed } from '@angular/core/testing';

import { ProfAppCommonService } from './prof-app-common.service';

describe('ProfAppCommonService', () => {
  let service: ProfAppCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfAppCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
