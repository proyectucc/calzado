import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OneEmpleado} from '../../models/empleado.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { DatosEmpleado } from 'src/app/models/empleados.interface';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  /**
   * Crea una nueva instancia de la clase
   * @param httpClient Sends an `HTTPRequest` and returns a stream of `HTTPEvents`.
   */
  constructor(private http: HttpClient) {}

  /**
   * Servicio que contiene el array de empleados
   */
  cargarEmpleados() {
    const urls = 'https://localhost:44384/api/Empleados';

    return this.http.get<OneEmpleado>(urls);
  }

  /**
   * Servicio que se encarga de comunicar backend y Frontend para el método Get con parámetros
   */
  getSingleEmpleado(id): Observable<DatosEmpleado> {
    const direccion = 'https://localhost:44384/api/Empleados/' + id;

    return this.http.get<DatosEmpleado>(direccion);
  }

  /**
   * Servicio que se encarga de comunicar backend y Frontend para el método Put
   */
  putEmpleados(form: DatosEmpleado): Observable<ResponseI>{
    const direccion = 'https://localhost:44384/api/Empleados/';

    const params = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.put<ResponseI>(direccion, form, {headers: params});
  }

  /**
   * Servicio que se encarga de comunicar backend y Frontend para el método Post
   */
  postEmpleados(form: OneEmpleado): Observable<OneEmpleado> {
    const direccion = 'https://localhost:44384/api/Empleados/';

    return this.http.post<OneEmpleado>(direccion, form);
  }

  /**
   * Servicio que se encarga de comunicar backend y Frontend para el método Delete
   */
  deleteEmpleado(id: number): Observable<ResponseI> {
    const direccion = 'https://localhost:44384/api/Empleados/' + id;

    return this.http.delete<ResponseI>(direccion);
  }
}
