import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Grand Theft Auto VI',
      precio: 680.99,
      descripcion: 'Vive la historia de Lucia y Jason, dos criminales en la vibrante Vice City moderna, forjando su leyenda en un mundo de crimen',
      imagen: 'https://www.infobae.com/resizer/v2/LFJPAJ546RCTLPRGAXDVJHCLQ4.jpg?auth=a5cce9ea4bed2e0017dff736948784ca122b5619f5f57ec3fa4b115f6f07dc1d&smart=true&width=1200&height=675&quality=85'
    },
    {
      id: 2,
      nombre: 'Minecraft',
      precio: 290.99,
      descripcion: 'Mundo infinito de bloques. Construye, explora y sobrevive',
      imagen: 'https://mitsloanreview.mx/wp-content/uploads/2024/07/lecciones-de-marketing-de-minecraft.jpg'
    },
    {
      id: 3,
      nombre: 'FIFA 25',
      precio: 359.99,
      descripcion: 'Vive la emoción del fútbol con jugabilidad mejorada y todos los equipos oficiales',
      imagen: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000074799/ab3989c5c208683e007deb3327a1ce70a8fa6cb38b06cfb8c2c80d563b19cfc7'
    },
    {
      id: 4,
      nombre: 'Elden Ring',
      precio: 149.99,
      descripcion: 'RPG de mundo abierto con combate soulslike y un mundo lleno de secretos',
      imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: Producto): void {
    alert(`${producto.nombre} agregado al carrito!`);
  }
}