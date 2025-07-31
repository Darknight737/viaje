import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Esto es esencial

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // <-- Asegúrate que esto esté aquí
    LoginRoutingModule
  ]
})
export class LoginModule { }
