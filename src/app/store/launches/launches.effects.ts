import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loadLaunches,
  loadLaunchesSuccess,
  loadLaunchesFailure
} from "./launches.actions";
import { LaunchesService } from "./launches.service";

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
