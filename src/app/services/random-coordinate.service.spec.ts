import { TestBed } from '@angular/core/testing';

import { RandomCoordinateService } from './random-coordinate.service';

describe('RandomCoordinateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomCoordinateService = TestBed.get(RandomCoordinateService);
    expect(service).toBeTruthy();
  });
});
