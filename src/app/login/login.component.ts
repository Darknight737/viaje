import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const exito = this.authService.login(this.email, this.password);
    if (exito) {
      alert('Login exitoso');
      this.router.navigate(['/dashboard']);  // ✅ redirige correctamente
    } else {
      alert('Credenciales inválidas');
    }
  }
}
