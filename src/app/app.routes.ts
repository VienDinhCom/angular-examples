import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";
import { MePageComponent } from "./pages/me-page/me-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "me", component: MePageComponent },
  { path: "login", component: AuthPageComponent, data: { isLoginPage: true } },
  {
    path: "register",
    component: AuthPageComponent,
    data: { isLoginPage: false }
  },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
