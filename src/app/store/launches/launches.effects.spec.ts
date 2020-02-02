import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LaunchesEffects } from './launches.effects';

describe('LaunchesEffects', () => {
  let actions$: Observable<any>;
  let effects: LaunchesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LaunchesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LaunchesEffects>(LaunchesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
