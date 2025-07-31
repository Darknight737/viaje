import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html'
})
export class RegistroUsuarioComponent {
  nombre = '';
  email = '';
  password = '';
  confirmarPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrar() {
    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const exito = this.authService.register(this.nombre, this.email, this.password);
    if (exito) {
      alert('Registro exitoso, ya puedes iniciar sesión');
      this.router.navigate(['/login']);
    } else {
      alert('El email ya está registrado');
    }
  }
}
