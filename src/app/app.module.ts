import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";

import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ParentPageComponent } from './pages/parent-page/parent-page.component';
import { ChildPageComponent } from './pages/child-page/child-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    AboutPageComponent,
    DashboardPageComponent,
    ParentPageComponent,
    ChildPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
