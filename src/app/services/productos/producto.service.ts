import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos } from '../../models/productos';

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

    return this.http.get<productos>(urls);
  }

  getSingleproductos(id): Observable<productos> {
    const direccion = 'https://localhost:44384/api/Producto/' + id;

    return this.http.get<productos>(direccion);
  }

  putproductos(formulario: productos): Observable<productos>{
    const direccion = 'https://localhost:44384/api/Producto/ActualizarProducto';

    return this.http.put<productos>(direccion, formulario);
  }

  /**
   * Mewtodo que se ejecuta para realizar la creaci;on de un producto
   * @param form objeto con la data del producto
   * @returns returna un formulario con informacion a insertar en la BD
   */
  postproductos(form: productos): Observable<productos> {
    const direccion = 'https://localhost:44384/api/Producto/CrearProducto';

    return this.http.post<productos>(direccion, form);
  }

}