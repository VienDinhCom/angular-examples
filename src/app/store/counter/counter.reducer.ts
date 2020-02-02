import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

const initialState: CounterState = 0;

export type CounterState = number;

export const counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => initialState)
);
