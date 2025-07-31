import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletoDestinoRoutingModule } from './boleto-destino-routing.module';
import { RelacionBoletoDestinoComponent } from './relacion-boleto-destino/relacion-boleto-destino.component';
import { DetalleRelacionComponent } from './detalle-relacion/detalle-relacion.component';

@NgModule({
  declarations: [
    RelacionBoletoDestinoComponent,
    DetalleRelacionComponent
  ],
  imports: [
    CommonModule,
    BoletoDestinoRoutingModule
  ]
})
export class BoletoDestinoModule { }
