import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { adminRoutes } from "./admin.routes";

import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ProjectListPageComponent } from "./pages/project-list-page/project-list-page.component";
import { DashboardLayoutComponent } from "./layouts/dashboard-layout/dashboard-layout.component";

@NgModule({
  declarations: [
    DashboardPageComponent,
    ProjectListPageComponent,
    DashboardLayoutComponent
  ],
  imports: [CommonModule, RouterModule.forChild(adminRoutes)]
})
export class AdminModule {}
