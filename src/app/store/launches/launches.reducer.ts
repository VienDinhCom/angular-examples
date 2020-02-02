import { Action, createReducer, on } from "@ngrx/store";
import { Launch } from "src/app/interfaces/launch";
import {
  loadLaunches,
  loadLaunchesSuccess,
  loadLaunchesFailure
} from "./launches.actions";

export interface LaunchesState {
  loading: boolean;
  data: Launch[] | null;
  error: Error | null;
}

export const initialState: LaunchesState = {
  loading: false,
  data: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadLaunches, (state: LaunchesState) => {
    return { ...state, loading: true, error: null };
  }),
  on(loadLaunchesSuccess, (state: LaunchesState, { data }) => {
    return { ...state, loading: false, data };
  }),
  on(loadLaunchesFailure, (state: LaunchesState, { error }) => {
    return { ...state, loading: false, error };
  })
);

export function launchesReducer(state: LaunchesState, action: Action) {
  return reducer(state, action);
}
