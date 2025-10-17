import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent implements OnInit {
  mensajeVisible: boolean = false;
  mensaje: string = '';
  hayProductos: boolean = false;

  // === LISTA DE PRODUCTOS ACTUALIZADA CON precioOriginal ===
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Grand Theft Auto VI',
      precio: 69.99,
      precioOriginal: 99.99, // Precio anterior
      descripcion: 'Acción y aventura en la ciudad',
      imagen: 'assets/gta.jpg'
    },
    {
      id: 2,
      nombre: 'Minecraft',
      precio: 29.99,
      precioOriginal: 49.99, // Precio anterior
      descripcion: 'Construye y explora tu mundo',
      imagen: 'assets/minecraft.jpg'
    },
    {
      id: 3,
      nombre: 'FIFA 25',
      precio: 59.99,
      descripcion: 'El mejor juego de fútbol',
      imagen: 'assets/fifa.jpg'
    },
    {
      id: 4,
      nombre: 'Elden Ring',
      precio: 49.99,
      descripcion: 'RPG de acción desafiante',
      imagen: 'assets/elden-ring.jpg'
    }
  ];
// ========================================================

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe(carrito => {
      this.hayProductos = carrito.length > 0;
    });
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
    this.mensaje = `🛒 "${producto.nombre}" agregado al carrito`;
    this.mostrarMensaje();
  }

  realizarCompra(): void {
    if (!this.hayProductos) return;

    this.carritoService.limpiarCarrito();
    this.mensaje = '✅ Compra realizada con éxito';
    this.mostrarMensaje();
  }

  private mostrarMensaje(): void {
    this.mensajeVisible = true;
    setTimeout(() => (this.mensajeVisible = false), 2000);
  }
}
