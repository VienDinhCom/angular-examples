import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];
