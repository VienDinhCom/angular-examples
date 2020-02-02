import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BasicStore } from "./store/store";

import { appRoutes } from "./app.routes";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

const store = new BasicStore({
  loading: false,
  data: null,
  error: null
});

store.state.subscribe(console.log);

console.log({ state: store.snapshot.state });

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    AboutPageComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
