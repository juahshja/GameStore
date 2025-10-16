import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito';
import { ProductosComponent } from './components/productos/productos';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: 'productos' }
];
