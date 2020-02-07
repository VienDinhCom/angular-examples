import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "list", component: ListPageComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
