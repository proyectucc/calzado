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

<<<<<<< HEAD
  /* getSingleEmpleado(id): Observable<OneEmpleado> {
    const direccion = 'https://localhost:44384/api/Empleados?id=' + id;
=======
  getSingleproductos(id): Observable<productos> {
    const direccion = 'https://localhost:44384/api/Producto/' + id;
>>>>>>> 31f2c1e9c91fc810e79bd17a49a68d4e2dfc5d1b

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