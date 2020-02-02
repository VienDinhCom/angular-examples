import { createReducer, on, Action } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

const initialState: CounterState = 0;

export type CounterState = number;

const reducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => initialState)
);

export function counterReducer(state: CounterState, action: Action) {
  return reducer(state, action);
}
