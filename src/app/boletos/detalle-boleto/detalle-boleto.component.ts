import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletoService } from '../../servicios/boleto.service';

@Component({
  selector: 'app-detalle-boleto',
  templateUrl: './detalle-boleto.component.html',
  styleUrls: ['./detalle-boleto.component.scss']
})
export class DetalleBoletoComponent implements OnInit {
  boletoSeleccionado: any = null;
  usuarioNombre: string = 'Usuario'; // Puedes obtenerlo dinámicamente si tienes sistema de login

  constructor(
    private route: ActivatedRoute,
    private boletoService: BoletoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtenemos parámetros (puede ser id o ciudad + hora para identificar boleto)
    const ciudad = this.route.snapshot.queryParamMap.get('ciudad');
    const hora = this.route.snapshot.queryParamMap.get('hora');

    if (ciudad && hora) {
      // Buscar boleto con ciudad y hora
      this.boletoSeleccionado = this.boletoService
        .obtenerTodosLosBoletos()
        .find(b => b.ciudad === ciudad && b.hora === hora);
    }

    if (!this.boletoSeleccionado) {
      // Si no hay boleto, redirigir a lista de boletos
      this.router.navigate(['/boletos']);
    }
  }
}
