import { TestBed } from '@angular/core/testing';

import { TentsService } from './tents.service';

describe('TentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TentsService = TestBed.get(TentsService);
    expect(service).toBeTruthy();
  });
});
