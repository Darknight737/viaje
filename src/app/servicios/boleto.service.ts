import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  private boletos = [
    { id: '1', ciudad: 'Quito', hora: '10:00 AM', precio: 15 },
    { id: '2', ciudad: 'Guayaquil', hora: '12:30 PM', precio: 18 },
    { id: '3', ciudad: 'Cuenca', hora: '3:00 PM', precio: 20 }
  ];

  obtenerTodosLosBoletos() {
    return this.boletos;
  }

  obtenerBoletosPorDestino(destino: string) {
    return this.boletos.filter(b => b.ciudad === destino);
  }

  obtenerBoletoPorId(id: string) {
    return this.boletos.find(b => b.id === id);
  }
}
