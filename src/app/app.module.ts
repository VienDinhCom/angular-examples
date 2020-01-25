import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, AboutPageComponent, ContactPageComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
