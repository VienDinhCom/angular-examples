import { createAction, props } from "@ngrx/store";

import { mapValues, mapKeys } from "lodash";

interface I<State> {
  name: string;
  initialState: State;
  reducers: {};
}

export function createSlide<State>({ name, initialState, reducers }: I<State>) {
  const actions = mapValues(reducers, (value, key) =>
    createAction(`[${name}] ${key}`, props)
  );

  return {
    name,
    actions
  };
}
