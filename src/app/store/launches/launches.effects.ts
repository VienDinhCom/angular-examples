import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, Effect } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import {
  loadLaunches,
  loadLaunchesSuccess,
  loadLaunchesFailure
} from "./launches.actions";
import { LaunchesService } from "./launches.service";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class LaunchesEffects {
  loadLaunches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLaunches),
      mergeMap(() =>
        this.launchesService.getAll().pipe(
          map(launches => loadLaunchesSuccess({ data: launches })),
          catchError((error: HttpErrorResponse) =>
            of(loadLaunchesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private launchesService: LaunchesService
  ) {}
}
