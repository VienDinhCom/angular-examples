import { counterReducer, CounterState } from "./counter/counter.reducer";
import * as counterActions from "./counter/counter.actions";
import { counterSelectors } from "./counter/counter.selectors";

export interface State {
  count: CounterState;
}

export const reducers = {
  count: counterReducer
};

export const actions = {
  counter: counterActions
};

export const selectors = {
  counter: counterSelectors
};
