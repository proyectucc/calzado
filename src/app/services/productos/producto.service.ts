import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../../models/productos';

@Injectable({
  providedIn: 'root',
})
export class productoService {
  /**
   * Crea una nueva instancia de la clase
   */
  constructor(private http: HttpClient) {}

  /**
   * Servicio que contiene el array de empleados
   */
  cargarproducto() {
    const urls = 'https://localhost:44384/api/Producto/MostrarProducto';

    return this.http.get<Productos>(urls);
  }

  getSingleproductos(id): Observable<Productos> {
    const direccion = 'https://localhost:44384/api/Producto/' + id;

    return this.http.get<Productos>(direccion);
  }

  putproductos(formulario: Productos): Observable<Productos>{
    const direccion = 'https://localhost:44384/api/Producto/ActualizarProducto';

    return this.http.put<Productos>(direccion, formulario);
  }

  /**
   * Mewtodo que se ejecuta para realizar la creaci;on de un producto
   * @param form objeto con la data del producto
   * @returns returna un formulario con informacion a insertar en la BD
   */
  postproductos(form: Productos): Observable<Productos> {
    const direccion = 'https://localhost:44384/api/Producto/CrearProducto';

    return this.http.post<Productos>(direccion, form);
  }

}
