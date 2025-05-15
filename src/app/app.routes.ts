// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AdminGuard]
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.component').then(m => m.InicioComponent),
    canActivate: [AuthGuard]
},
   {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./features/registro/registro.component').then(m => m.RegistroComponent)
  },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];
