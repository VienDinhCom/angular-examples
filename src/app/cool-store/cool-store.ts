import { BehaviorSubject } from "rxjs";
import produce, { Draft } from "immer";

export class CoolStore<CoolState> {
  private _state: CoolState = null;
  private state$ = new BehaviorSubject<CoolState>(null);

  constructor(initialState: CoolState) {
    this.setInitialState(initialState);
  }

  private emitState() {
    this.state$.next(this.getState());
  }

  private getState() {
    return produce(this._state, () => {});
  }

  private setInitialState(initialState: CoolState) {
    this._state = produce(initialState, () => {});
    this.emitState();
  }

  setState(callback: (state: Draft<CoolState>) => void) {
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
