import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // { path: "", component: HomePageComponent },
  // { path: "404", component: ErrorPageComponent },
  // { path: '**', redirectTo: '/404' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
