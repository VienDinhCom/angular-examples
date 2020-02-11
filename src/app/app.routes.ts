import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // { path: "", component: HomePageComponent },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule),
  },
  // { path: "404", component: ErrorPageComponent },
  // { path: '**', redirectTo: '/404' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
