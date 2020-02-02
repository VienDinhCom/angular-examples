import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { actions, State } from "../../store";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = store.select("count");
  }

  increment() {
    this.store.dispatch(actions.counter.increment());
  }

  decrement() {
    this.store.dispatch(actions.counter.decrement());
  }

  reset() {
    this.store.dispatch(actions.counter.reset());
  }
}
