import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

// === SOLUCIÓN: RUTA AJUSTADA (Se quita '.component' del path de importación) ===
import { ProductosComponent } from '../../components/productos/productos'; 

@Component({
  selector: 'app-inicio',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule, 
    ProductosComponent 
  ], 
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent implements OnInit {

  productos: any[] = []; 

  constructor() { }

  ngOnInit(): void { }
}