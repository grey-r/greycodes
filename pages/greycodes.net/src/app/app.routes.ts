import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
];
