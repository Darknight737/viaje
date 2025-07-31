import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DetalleDestinoComponent } from './detalle-destino/detalle-destino.component';

@NgModule({
  declarations: [
    ListaDestinosComponent,
    DetalleDestinoComponent
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule
  ]
})
export class DestinosModule { }
