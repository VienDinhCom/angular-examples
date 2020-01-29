import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "@core/core.module";

import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
