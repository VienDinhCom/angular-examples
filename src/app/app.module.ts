import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { appRoutes } from "./app.routes";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { PostListPageComponent } from "./pages/post-list-page/post-list-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    AboutPageComponent,
    PostListPageComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
