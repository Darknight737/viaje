import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((u: any) => u.email === email && u.password === password);
    if (usuario) {
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  register(nombre: string, email: string, password: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (usuarios.some((u: any) => u.email === email)) {
      return false;  // ya existe usuario con ese email
    }
    usuarios.push({ nombre, email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
  }

  logout(): void {
    localStorage.removeItem('usuarioActual');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('usuarioActual') !== null;
  }

  getUsuarioActual(): any {
    const userJson = localStorage.getItem('usuarioActual');
    return userJson ? JSON.parse(userJson) : null;
  }
}
