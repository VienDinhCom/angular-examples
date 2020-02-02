import { Injectable, OnInit } from "@angular/core";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlide } from "./counter/counter.slide";

@Injectable({
  providedIn: "root"
})
export class StoreService implements OnInit {
  store = configureStore({ reducer: counterSlide.reducer });
  dispatch = this.store.dispatch;
  getState = this.store.getState;

  constructor() {}

  select() {}

  get snapshot() {
    return {
      select: () => {
        return {};
      }
    };
  }

  ngOnInit() {
    // this.store.subscribe(() =>)
  }
}
