import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Productos {
    private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Grand Theft Auto VI',
      precio: 69.99,
      descripcion: 'Acción y aventura en la ciudad',
      imagen: 'assets/gta.jpg'
    },
    {
      id: 2,
      nombre: 'Minecraft',
      precio: 29.99,
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
}
