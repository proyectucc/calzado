import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.interface';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/models/response.interface';
import { Login } from 'src/app/models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioEmpleadoService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  /**
   * Crea una nueva instancia de la clase
   * @param httpClient Sends an `HTTPRequest` and returns a stream of `HTTPEvents`.
   */
  constructor(private http: HttpClient) {}

  /**
   * Método encargado de hacer una consulta a la base de datos y loguear al usuario
   * @param email email o usuario del empleado
   * @param password password asociado al email
   * @returns permite continuar con el flujo dentro de la aplicación
   */
  loginUsuario(Email: string, Password: string): Observable<Login> {
    const direccion = 'https://localhost:44384/api/Login';

    const params = new HttpParams().set('email', Email).set('password', Password);
    const headers = new HttpHeaders().set('Content-type', 'text/plain');

    return this.http.get<any>(direccion, { params , headers});
  }

  /**
   * Método encargado de cargar todos los empleados
   */
  cargarusuarios(): Observable<Usuario[]> {
    const direccion = 'https://localhost:44384/api/Usuarios';

    return this.http.get<Usuario[]>(direccion);
  }

  delete(id: number): Observable<ResponseI> {
    const direccion = 'https://localhost:44384/api/Usuarios/' + id;

    return this.http.delete<ResponseI>(direccion);
  }

  /**
   * Método que se encarga de traer un registro que corresponda a un Id
   */
  getSingleUsuario(id): Observable<Usuario> {
    const direccion = 'https://localhost:44384/api/Usuarios/' + id;

    return this.http.get<Usuario>(direccion);
  }

  /**
   * Método que se encarga de realizar la actualización
   */
  putUsuario(form: Usuario): Observable<ResponseI> {
    const direccion = 'https://localhost:44384/api/Usuarios/';

    const params = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.put<ResponseI>(direccion, form, { headers: params });
  }

  /**
   * Método que realiza la comunicación con el backend para la inserción
   */
  postUsuario(form: Usuario): Observable<Usuario> {
    const direccion = 'https://localhost:44384/api/Usuarios/';

    return this.http.post<Usuario>(direccion, form);
  }
}
