import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  nombreUsuario: string = '';

  constructor(private authService: AuthService, private router: Router) {
    const usuario = this.authService.getUsuarioActual();
    this.nombreUsuario = usuario ? usuario.nombre : 'Usuario';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
