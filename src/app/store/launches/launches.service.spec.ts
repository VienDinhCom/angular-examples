import { TestBed } from '@angular/core/testing';

import { LaunchesService } from './launches.service';

describe('LaunchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchesService = TestBed.get(LaunchesService);
    expect(service).toBeTruthy();
  });
});
