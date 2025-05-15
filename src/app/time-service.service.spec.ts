import { TestBed } from '@angular/core/testing';

import { TimezoneService } from './time-service.service';

describe('TimeServiceService', () => {
  let service: TimezoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimezoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
