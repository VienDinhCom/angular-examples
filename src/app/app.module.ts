import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule, Actions } from "@ngrx/effects";

import { reducers, effects } from "./store";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
