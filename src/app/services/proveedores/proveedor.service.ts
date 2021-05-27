import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedores } from 'src/app/models/proveedores';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  cargarProveedores() {
    const urls = 'https://localhost:44384/api/Proveedores/MostrarProveedores';

    return this.http.get<Proveedores>(urls);
  }
  addProveedores(prove:Proveedores): Observable<Proveedores>{
    const urls ='https://localhost:44384/api/Proveedores/CrearProveedor';
    return this.http.post<Proveedores>(urls,prove)
  }
  //   /**
  //  * Servicio que se encarga de comunicar backend y Frontend para el método Get con parámetros
  //  */
      getSingleProveedor(id): Observable<Proveedores> {
       const urls = 'https://localhost:44384/api/Proveedores/' + id;

       return this.http.get<Proveedores>(urls);
     }
  //   /**
  //  * Servicio que se encarga de comunicar backend y Frontend para el método Put
  //  */
     putProveedores(form:Proveedores): Observable<ResponseI>{
       const urls = 'https://localhost:44384/api/Proveedores/ActualizarProveedor';

       const params = new HttpHeaders().set('Content-type', 'application/json');

       return this.http.put<ResponseI>(urls, form, {headers: params});
     }
     deleteProveedor(id: number): Observable<ResponseI> {
      const urls = 'https://localhost:44384/api/Proveedores/' + id;

      return this.http.delete<ResponseI>(urls);
    }
}
