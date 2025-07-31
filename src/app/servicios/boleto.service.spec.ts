import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private boletos = [
    { ciudad: 'Quito', hora: '08:00 AM', precio: 10 },
    { ciudad: 'Guayaquil', hora: '09:30 AM', precio: 12 },
    { ciudad: 'Cuenca', hora: '11:00 AM', precio: 15 },
    { ciudad: 'Quito', hora: '01:00 PM', precio: 10 },
    { ciudad: 'Manta', hora: '03:00 PM', precio: 11 }
  ];

  constructor() {}

  obtenerTodosLosBoletos() {
    return this.boletos;
  }

  obtenerBoletosPorDestino(destino: string) {
    return this.boletos.filter(b => b.ciudad.toLowerCase() === destino.toLowerCase());
  }
}