import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    const esAdmin = this.auth.esAdmin(); // Supongo que devuelve boolean

    if (!esAdmin) {
      this.router.navigate(['/inicio']); // Redirigir al inicio si no es admin
      return false;
    }

    return true; // Permitir acceso si es admin
  }
}
