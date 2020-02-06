import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { appRoutes } from "./app.routes";

import { AppComponent } from "./app.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, PostsPageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
