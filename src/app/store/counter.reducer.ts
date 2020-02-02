import { Action, createReducer, on } from "@ngrx/store";
import { counterActions } from "./counter.actions";

export type CounterState = number;

export const initialState: CounterState = 0;

export const counterReducer = createReducer(
  initialState,
  on(counterActions.increment, state => state + 1),
  on(counterActions.decrement, state => state - 1),
  on(counterActions.reset, state => 0)
);
