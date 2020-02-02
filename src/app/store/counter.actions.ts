import { createAction } from "@ngrx/store";

export const counterActions = {
  increment: createAction("[Counter] Increment"),
  decrement: createAction("[Counter] Decrement"),
  reset: createAction("[Counter] Reset")
};
