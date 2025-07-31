import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Para ngModel

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MensajeComponent,
    MostrarMensajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,       // <-- Importante para [(ngModel)]
    AppRoutingModule   // <-- Importa las rutas y RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
