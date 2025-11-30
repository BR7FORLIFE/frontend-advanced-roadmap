import { Routes } from '@angular/router';
import { Dashboard } from '@features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((routes) => routes.DASHBOARD_ROUTES),
  },
];
