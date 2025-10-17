import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito';
import { ProductosComponent } from './components/productos/productos';
import { InicioComponent } from './pages/inicio/inicio';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'inicio' }
];
