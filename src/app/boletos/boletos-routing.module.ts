import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBoletosComponent } from './lista-boletos/lista-boletos.component';
import { DetalleBoletoComponent } from './detalle-boleto/detalle-boleto.component';

const routes: Routes = [
  { path: '', component: ListaBoletosComponent },         // /boletos
  { path: ':id', component: DetalleBoletoComponent }      // /boletos/123
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletosRoutingModule { }
