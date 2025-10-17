import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarMensaje() {
    console.log('Mensaje enviado:', this.contacto);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    // Limpiar formulario
    this.contacto = { nombre: '', email: '', mensaje: '' };
  }
}