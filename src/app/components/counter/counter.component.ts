import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { counterActions } from "../../store/counter.actions";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select("count");
  }

  increment() {
    this.store.dispatch(counterActions.increment());
  }

  decrement() {
    this.store.dispatch(counterActions.decrement());
  }

  reset() {
    this.store.dispatch(counterActions.reset());
  }
}
