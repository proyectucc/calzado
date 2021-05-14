   import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from '../../models/empleados';
import { OneEmpleado} from '../../models/empleado.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(private http: HttpClient) {}

  cargarEmpleados() {
    const urls = 'https://localhost:44384/api/Empleados';

    return this.http.get<Empleados>(urls);
  }

  getSingleEmpleado(id): Observable<OneEmpleado> {
    const direccion = 'https://localhost:44384/api/Empleados?id=' + id;

    return this.http.get<OneEmpleado>(direccion);
  }

  putEmpleados(formulario: Empleados): Observable<Empleados>{
    const direccion = 'https://localhost:44384/api/Empleados?EmpleadoId=';

    return this.http.put<Empleados>(direccion, formulario);
  }
}
