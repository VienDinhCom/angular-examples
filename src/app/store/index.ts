import { counterReducer, CounterState } from "./counter/counter.reducer";
import * as counterActions from "./counter/counter.actions";
import { counterSelectors } from "./counter/counter.selectors";
import { createSlide } from "./createSlide";

const counter = createSlide({
  name: "counter",
  initialState: 0,
  reducers: {
    loadCounter: (state, action) => {},
    loadCounterSuccess: () => {},
    loadCounterFailure: () => {}
  }
});

console.log(counter);

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
