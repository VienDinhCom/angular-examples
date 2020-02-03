import { Subject } from "rxjs";
import produce, { Draft } from "immer";

export class CoolStore<CoolState> {
  private initialState: CoolState;
  private _state: CoolState;
  private state$ = new Subject<CoolState>();
  private clone = produce((state: Draft<CoolState>) => {});

  constructor(initialState: CoolState) {
    this._state = this.clone(initialState);
    this.initialState = this.clone(initialState);
    this.emitState();
  }

  setState(callback: (state: Draft<CoolState>) => void) {
    this._state = produce(this._state, callback);
    this.emitState();
  }

  getState() {
    return this.clone(this._state);
  }

  resetState() {
    this._state = this.clone(this.initialState);
    this.emitState();
  }

  get state() {
    return this.state$.asObservable();
  }

  private emitState() {
    this.state$.next(this.getState());
  }
}
