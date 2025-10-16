import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent implements OnInit {
  carrito: (Producto & { cantidad: number })[] = [];
  total = 0;
  mensajeVisible = false;
  mensaje = '';

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe(items => {
      this.carrito = items;
      this.total = this.carritoService.obtenerTotal();
    });
  }

  limpiarCarrito(): void {
    this.carritoService.limpiarCarrito();
    this.mensaje = '🗑️ Carrito vaciado';
    this.mostrarMensaje();
  }

  realizarCompra(): void {
    if (this.carrito.length === 0) {
      this.mensaje = '⚠️ Tu carrito está vacío';
    } else {
      this.carritoService.limpiarCarrito();
      this.mensaje = '✅ ¡Compra realizada con éxito!';
    }
    this.mostrarMensaje();
  }

  private mostrarMensaje(): void {
    this.mensajeVisible = true;
    setTimeout(() => (this.mensajeVisible = false), 2500);
  }
}
