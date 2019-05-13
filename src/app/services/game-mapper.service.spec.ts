import { TestBed } from '@angular/core/testing';

import { GameMapperService } from './game-mapper.service';

describe('GameMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameMapperService = TestBed.get(GameMapperService);
    expect(service).toBeTruthy();
  });
});
