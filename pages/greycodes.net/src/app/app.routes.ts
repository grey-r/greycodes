import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { PhotographyComponent } from './pages/photography/photography.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(
        (mod) => mod.PrivacyComponent
      ),
  },
  {
    path: 'photography',
    loadComponent: () =>
      import('./pages/photography/photography.component').then(
        (mod) => mod.PhotographyComponent
      ),
  },
];
