import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Boleto {
  nombre: string;
  hora: string;
  precio: number;
  ciudad: string;
}

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.scss']
})
export class BoletosComponent implements OnInit {
  ciudadSeleccionada: string = '';
  boletos: Boleto[] = [];
  boletosFiltrados: Boleto[] = [];
  modalAbierto = false;
  boletoSeleccionado: Boleto | null = null;

  todosBoletos: Boleto[] = [
    { nombre: 'Boleto Quito Mañana', hora: '08:00', precio: 10, ciudad: 'Quito' },
    { nombre: 'Boleto Quito Tarde', hora: '15:00', precio: 12, ciudad: 'Quito' },
    { nombre: 'Boleto Guayaquil Mañana', hora: '09:00', precio: 8, ciudad: 'Guayaquil' },
    { nombre: 'Boleto Cuenca Noche', hora: '20:00', precio: 15, ciudad: 'Cuenca' }
    // Más boletos para diferentes ciudades
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ciudadSeleccionada = params['ciudad'] || '';
      this.filtrarBoletos();
    });
  }

  filtrarBoletos() {
    this.boletos = this.todosBoletos.filter(b => b.ciudad === this.ciudadSeleccionada);
  }

  abrirModal(boleto: Boleto) {
    this.boletoSeleccionado = boleto;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.boletoSeleccionado = null;
  }

  comprar() {
    alert(`Compra confirmada para ${this.boletoSeleccionado?.nombre} a las ${this.boletoSeleccionado?.hora}`);
    this.cerrarModal();
  }
}
