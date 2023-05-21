import { TestBed } from '@angular/core/testing';

import { FlightManagementService } from './flight-management.service';

describe('FlightManagementService', () => {
  let service: FlightManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
