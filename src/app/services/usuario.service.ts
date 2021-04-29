import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseURL = environment.apiURL + 'Empleados/';


  /**
   * Crea una nueva instancia de la clase
   */
  constructor(private http: HttpClient) {}

  cargarEmpleados()
  {
    const urls = 'https://localhost:44384/api/Empleados';

    return this.http.get<Empleados>( urls );
  }

  /**
   * Se ejecuta para obtener información de la api
   */
  obtener(): Observable<any> {
    const params = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get('https://localhost:44384/api/Empleados', {
      headers: params,
    });
  }

  ingresar(user): Observable<any> {
    const parametros = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post('https://localhost:44384/api/Empleados', parametros, {
      headers,
    });
  }
}
