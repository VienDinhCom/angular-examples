import { createSelector } from "@ngrx/store";
import { State } from "../";

function selectCount(state: State) {
  return state;
}

export const counterSelectors = {
  count: createSelector(selectCount, count => count)
};
