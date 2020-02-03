import { BehaviorSubject } from "rxjs";
import produce, { Draft } from "immer";

export class CoolStore<CoolState> {
  private initialState: CoolState;
  private _state: CoolState = null;
  private state$ = new BehaviorSubject<CoolState>(null);
  private clone = produce((state: Draft<CoolState>) => {});

  constructor(initialState: CoolState) {
    this._state = this.clone(initialState);
    this.initialState = this.clone(initialState);
    this.emitState();
  }

  resetState() {
    this._state = this.clone(this.initialState);
    this.emitState();
  }

  setState(callback: (state: Draft<CoolState>) => void) {
    this._state = produce(this._state, callback);
    this.emitState();
  }

  getState() {
    return produce(this._state, () => {});
  }

  get state() {
    return this.state$.asObservable();
  }

  private emitState() {
    this.state$.next(this.getState());
  }
}
