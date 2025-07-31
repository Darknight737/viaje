import { Component } from '@angular/core';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-mensaje',
  template: `
    <input [(ngModel)]="nuevoMensaje" placeholder="Escribe un mensaje">
    <button (click)="enviar()">Enviar</button>
  `
})
export class MensajeComponent {
  nuevoMensaje = '';

  constructor(private mensajeService: MensajeService) {}

  enviar() {
    this.mensajeService.cambiarMensaje(this.nuevoMensaje);
  }
}
