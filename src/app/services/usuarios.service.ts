import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
private apiUrl = 'http://localhost:8000/usuarios';

  constructor(private http: HttpClient) {}

  registrarUsuario(datos: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, datos);
  }
}
