// src/app/services/auth.service.ts
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario, UsuarioLogin } from '../models/usuario.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/usuarios';
  private usuarioActual: Usuario | null = null;

  constructor(private http: HttpClient) {}

  login(data: UsuarioLogin): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, data).pipe(
      tap((usuario) => {
        this.usuarioActual = usuario;
        // Solo usar localStorage si estamos en el cliente
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
        }
      })
    );
  }

  logout() {
    this.usuarioActual = null;
    // Solo usar localStorage si estamos en el cliente
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('usuario');
    }
  }

  getUsuario(): Usuario | null {
    if (!this.usuarioActual) {
      // Solo usar localStorage si estamos en el cliente
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('usuario');
        if (stored) this.usuarioActual = JSON.parse(stored);
      }
    }
    return this.usuarioActual;
  }

  estaAutenticado(): boolean {
    return !!this.getUsuario();
  }

  esAdmin(): boolean {
    return this.getUsuario()?.is_admin ?? false;
  }

  
  registrarUsuario(data: { email: string; password: string, username:string }) {
    return this.http.post(`${this.apiUrl}/registro`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

}
