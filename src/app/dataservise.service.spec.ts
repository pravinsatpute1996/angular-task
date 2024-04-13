import { TestBed } from '@angular/core/testing';

import { DataserviseService } from './dataservise.service';

describe('DataserviseService', () => {
  let service: DataserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
