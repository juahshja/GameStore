import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: (Producto & { cantidad: number })[] = [];
  private carritoSubject = new BehaviorSubject<(Producto & { cantidad: number })[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  agregarProducto(producto: Producto): void {
    const productoExistente = this.carrito.find(p => p.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }

    this.carritoSubject.next([...this.carrito]);
  }

  limpiarCarrito(): void {
    this.carrito = [];
    this.carritoSubject.next([...this.carrito]);
  }

  obtenerCarrito(): (Producto & { cantidad: number })[] {
    return [...this.carrito];
  }

  obtenerTotal(): number {
    return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }
}
