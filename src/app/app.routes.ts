// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio.component').then(m => m.InicioComponent)
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
  {
    path: '**',
    redirectTo: '',// Redirige a la página de inicio si la ruta no coincide
    pathMatch: 'full'
  }

];
