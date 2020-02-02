import { BehaviorSubject } from "rxjs";
import produce, { Draft } from "immer";

export class BasicStore<State> {
  private _state: State = null;
  private state$ = new BehaviorSubject<State>(null);

  constructor(initialState: State) {
    this.setInitialState(initialState);
  }

  private emitState() {
    this.state$.next(this.getState());
  }

  private getState() {
    return produce(this._state, () => {});
  }

  private setInitialState(initialState: State) {
    this._state = produce(initialState, () => {});
    this.emitState();
  }

  setState(callback: (draft: Draft<State>) => void) {
    this._state = produce(this._state, callback);
    this.emitState();
  }

  get snapshot() {
    return {
      state: this.getState()
    };
  }

  get state() {
    return this.state$.asObservable();
  }
}
