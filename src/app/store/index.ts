import { counterReducer, CounterState } from "./counter.reducer";
import { counterActions } from "./counter.actions";

export interface State {
  count: CounterState;
}

export const reducers = {
  count: counterReducer
};

export const actions = {
  counter: counterActions
};
