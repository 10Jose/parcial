import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/api/v1/auth/login';

  login(email: string, password: string) {
    return this.http.post<any>(this.url, { email, password });
  }

  guardarUsuario(user: any) {
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  obtenerUsuario() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
  }
}