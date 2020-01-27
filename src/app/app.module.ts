import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LeaveGuard } from "./guards/leave.guard";
import { AuthService } from "./services/auth.service";

import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ParentPageComponent } from "./pages/parent-page/parent-page.component";
import { ChildPageComponent } from "./pages/child-page/child-page.component";
import { LeavePageComponent } from "./pages/leave-page/leave-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    AboutPageComponent,
    DashboardPageComponent,
    ParentPageComponent,
    ChildPageComponent,
    LeavePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [AuthService, LeaveGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
