import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";

import { AppComponent } from "./app.component";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, StoreModule.forRoot(reducers)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
