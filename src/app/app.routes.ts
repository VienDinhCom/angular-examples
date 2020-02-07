import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent, data: { animation: "HomePage" } },
  {
    path: "list",
    component: ListPageComponent,
    data: { animation: "ListPage" }
  },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
