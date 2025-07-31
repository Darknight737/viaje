// src/app/destinos/lista-destinos/lista-destinos.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.scss']
})
export class ListaDestinosComponent implements OnInit {
  destinos = [
    {
      ciudad: 'Quito',
      descripcion: 'Capital de Ecuador, conocida por su centro histórico y cultura.',
      clima: 'Temperatura promedio de 15°C, clima fresco y agradable.',
      atracciones: ['La Mitad del Mundo', 'Teleférico', 'Centro Histórico'],
      imagen: 'assets/images/quito.jpg'
    },
    {
      ciudad: 'Guayaquil',
      descripcion: 'Ciudad portuaria, famosa por su Malecón y vida nocturna.',
      clima: 'Clima tropical, temperatura promedio 28°C.',
      atracciones: ['Malecón 2000', 'Parque Histórico', 'Islas de la Bahía'],
      imagen: 'assets/images/guayaquil.jpg'
    },
    {
      ciudad: 'Cuenca',
      descripcion: 'Ciudad colonial con arquitectura y cultura vibrantes.',
      clima: 'Clima templado con lluvias en invierno.',
      atracciones: ['Parque Calderón', 'Museo Pumapungo', 'Iglesia del Carmen'],
      imagen: 'assets/images/cuenca.jpg'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  comprarBoleto(ciudad: string) {
    this.router.navigate(['/boletos/lista-boletos'], { queryParams: { destino: ciudad } });
  }
}
