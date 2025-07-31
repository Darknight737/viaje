import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoletoService } from '../../servicios/boleto.service';

@Component({
  selector: 'app-lista-boletos',
  templateUrl: './lista-boletos.component.html',
  styleUrls: ['./lista-boletos.component.scss']
})
export class ListaBoletosComponent implements OnInit {
  boletos: any[] = [];
  destinoSeleccionado: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private boletoService: BoletoService
  ) {}

  ngOnInit(): void {
    this.destinoSeleccionado = this.route.snapshot.queryParamMap.get('destino');

    if (this.destinoSeleccionado) {
      this.boletos = this.boletoService.obtenerBoletosPorDestino(this.destinoSeleccionado);
    } else {
      this.boletos = this.boletoService.obtenerTodosLosBoletos();
    }
  }
  comprar(boleto: any) {
  alert(`Boleto para ${boleto.ciudad} a las ${boleto.hora} comprado por $${boleto.precio}`);
}

}
