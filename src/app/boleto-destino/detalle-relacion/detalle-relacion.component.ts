import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoletoService } from 'src/app/servicios/boleto.service';

@Component({
  selector: 'app-detalle-relacion',
  templateUrl: './detalle-relacion.component.html',
  styleUrls: ['./detalle-relacion.component.scss']
})
export class DetalleRelacionComponent implements OnInit {
  boleto: any;

  constructor(
    private route: ActivatedRoute,
    private boletoService: BoletoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.boleto = this.boletoService.obtenerBoletoPorId(id);
    }
  }
}
