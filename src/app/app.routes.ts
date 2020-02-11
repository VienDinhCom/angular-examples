import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // { path: "", component: HomePageComponent },
  // { path: "about", component: AboutPageComponent },
  // { path: "404", component: ErrorPageComponent },
  { path: '**', redirectTo: '/404' },
];
