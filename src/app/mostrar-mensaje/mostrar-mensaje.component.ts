import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../servicios/mensaje.service';

@Component({
  selector: 'app-mostrar-mensaje',
  template: `<h3>Mensaje: {{ mensaje }}</h3>`
})
export class MostrarMensajeComponent implements OnInit {
  mensaje = '';

  constructor(private mensajeService: MensajeService) {}

  ngOnInit() {
    this.mensajeService.mensaje$.subscribe(m => this.mensaje = m);
  }
}
