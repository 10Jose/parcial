import { Routes } from '@angular/router';
import { Login } from './view/login/login';
import { Home } from './view/home/home';
import { Materias } from './view/materias/materias';
import { authGuard } from './guards/guards';

export const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: Login },
  { path: 'Home', component: Home, canActivate: [authGuard] },
  { path: 'materias', component: Materias, canActivate: [authGuard] },
];