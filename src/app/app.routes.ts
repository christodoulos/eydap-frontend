import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitCaseComponent } from './submit-case/submit-case.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'analysis',
    component: SubmitCaseComponent,
  },
];
