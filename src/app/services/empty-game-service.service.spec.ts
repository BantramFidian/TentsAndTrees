import { TestBed } from '@angular/core/testing';

import { EmptyGameService } from './empty-game.service';

describe('EmptyGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmptyGameService = TestBed.get(EmptyGameService);
    expect(service).toBeTruthy();
  });
});
