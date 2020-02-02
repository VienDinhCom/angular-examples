import { launchesReducer } from "./launches/launches.reducer";
import * as launchesActions from "./launches/launches.actions";
import { LaunchesEffects } from "./launches/launches.effects";

export interface State {}

export const reducers = {
  launches: launchesReducer
};

export const actions = {
  launches: launchesActions
};

export const selectors = {};

export const effects = [LaunchesEffects];
