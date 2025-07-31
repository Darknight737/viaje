import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private mensajeSource = new BehaviorSubject<string>('Hola!');
  mensaje$ = this.mensajeSource.asObservable();

  cambiarMensaje(nuevoMensaje: string) {
    this.mensajeSource.next(nuevoMensaje);
  }
}
