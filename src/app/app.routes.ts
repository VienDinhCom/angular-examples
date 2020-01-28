import { Routes } from "@angular/router";
import { rootPageRoutes } from "./root-pages/root-pages.routes";

export const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./root-pages/root-pages.module").then(
        ({ RootPagesModule }) => RootPagesModule
      )
  },
  {
    path: "app",
    loadChildren: () =>
      import("./app-pages/app-pages.module").then(
        ({ AppPagesModule }) => AppPagesModule
      )
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];
