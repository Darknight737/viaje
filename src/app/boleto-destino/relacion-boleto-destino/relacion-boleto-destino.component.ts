import { Component, OnInit } from '@angular/core';
import { BoletoService } from '../../servicios/boleto.service';

@Component({
  selector: 'app-relacion-boleto-destino',
  templateUrl: './relacion-boleto-destino.component.html',
  styleUrls: ['./relacion-boleto-destino.component.scss']
})
export class RelacionBoletoDestinoComponent implements OnInit {
  destinosConBoletos: { nombre: string; boletos: any[] }[] = [];

  constructor(private boletoService: BoletoService) {}

  ngOnInit(): void {
    const boletos = this.boletoService.obtenerTodosLosBoletos();

    const agrupados = boletos.reduce((acc: any, boleto: any) => {
      const ciudad = boleto.ciudad;
      if (!acc[ciudad]) {
        acc[ciudad] = [];
      }
      acc[ciudad].push(boleto);
      return acc;
    }, {});

    this.destinosConBoletos = Object.keys(agrupados).map(ciudad => ({
      nombre: ciudad,
      boletos: agrupados[ciudad]
    }));
  }

  comprar(boleto: any) {
    alert(`Boleto para ${boleto.ciudad} a las ${boleto.hora} comprado por $${boleto.precio}`);
  }
}
