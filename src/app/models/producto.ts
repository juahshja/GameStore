export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    
    // === ESTA ES LA PROPIEDAD QUE FALTABA ===
    precioOriginal?: number; // El '?' significa que es OPCIONAL
}