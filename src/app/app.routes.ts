import { Routes } from "@angular/router";

import { IndexPageComponent } from "./pages/index-page/index-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";

export const appRoutes: Routes = [
  {
    path: "app",
    loadChildren: () =>
      import("./pages/app-pages/app-pages.module").then(
        ({ AppPagesModule }) => AppPagesModule
      )
  },
  { path: "about", component: AboutPageComponent },
  { path: "404", component: ErrorPageComponent },
  // { path: "**", redirectTo: "/404" }
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];
