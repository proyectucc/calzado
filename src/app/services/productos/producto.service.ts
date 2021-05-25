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

  /* getSingleEmpleado(id): Observable<OneEmpleado> {
    const direccion = 'https://localhost:44384/api/Empleados?id=' + id;

    return this.http.get<OneEmpleado>(direccion);
  }

  putEmpleados(formulario: Empleados): Observable<Empleados>{
    const direccion = 'https://localhost:44384/api/Empleados?EmpleadoId=';

    return this.http.put<Empleados>(direccion, formulario);
  } /**/
}
