import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { 
    path: 'destinos', 
    loadChildren: () => import('./destinos/destinos.module').then(m => m.DestinosModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'boletos', 
    loadChildren: () => import('./boletos/boletos.module').then(m => m.BoletosModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'boleto-destino', 
    loadChildren: () => import('./boleto-destino/boleto-destino.module').then(m => m.BoletoDestinoModule), 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
