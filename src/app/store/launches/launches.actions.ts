import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { Launch } from "src/app/interfaces/launch";

export const loadLaunches = createAction("[Launches] Load Launches");

export const loadLaunchesSuccess = createAction(
  "[Launches] Load Launches Success",
  props<{ data: Launch[] }>()
);

export const loadLaunchesFailure = createAction(
  "[Launches] Load Launches Failure",
  props<{ error: HttpErrorResponse }>()
);
