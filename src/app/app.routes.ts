import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { AuthGuard } from "./guards/auth.guard";
import { ParentPageComponent } from "./pages/parent-page/parent-page.component";
import { ChildPageComponent } from "./pages/child-page/child-page.component";
import { LeavePageComponent } from "./pages/leave-page/leave-page.component";
import { LeaveGuard } from "./guards/leave.guard";

export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: "parent",
    canActivateChild: [AuthGuard],
    component: ParentPageComponent,
    children: [
      {
        path: ":id",
        component: ChildPageComponent
      }
    ]
  },
  { path: "leave", canDeactivate: [LeaveGuard], component: LeavePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "/404" }
];
