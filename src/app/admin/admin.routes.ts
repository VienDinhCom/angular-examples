import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';

export const adminRoutes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'projects', component: ProjectListPageComponent }
];
