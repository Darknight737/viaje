import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletosRoutingModule } from './boletos-routing.module';
import { ListaBoletosComponent } from './lista-boletos/lista-boletos.component';
import { DetalleBoletoComponent } from './detalle-boleto/detalle-boleto.component';

@NgModule({
  declarations: [
    ListaBoletosComponent,
    DetalleBoletoComponent
  ],
  imports: [
    CommonModule,
    BoletosRoutingModule
  ]
})
export class BoletosModule { }
