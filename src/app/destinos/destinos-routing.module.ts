import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DetalleDestinoComponent } from './detalle-destino/detalle-destino.component';

const routes: Routes = [
  { path: '', component: ListaDestinosComponent },           // /destinos
  { path: ':id', component: DetalleDestinoComponent }        // /destinos/123
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
