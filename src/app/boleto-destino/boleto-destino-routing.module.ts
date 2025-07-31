import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelacionBoletoDestinoComponent } from './relacion-boleto-destino/relacion-boleto-destino.component';
import { DetalleRelacionComponent } from './detalle-relacion/detalle-relacion.component';

const routes: Routes = [
  { path: '', component: RelacionBoletoDestinoComponent },       // Cuando visitas /boleto-destino
  { path: ':id', component: DetalleRelacionComponent }           // Cuando visitas /boleto-destino/123 (detalle por id)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletoDestinoRoutingModule { }
