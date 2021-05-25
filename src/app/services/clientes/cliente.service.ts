import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/models/clientes';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  cargarClientes() {
    const urls = 'https://localhost:44384/api/Clientes/MostrarClientes';

    return this.http.get<Clientes>(urls);
  }
  addClientes(cliente: Clientes): Observable<Clientes>{
    const urls ='https://localhost:44384/api/Clientes/CrearCliente';
    return this.http.post<Clientes>(urls,cliente)
  }
    /**
   * Servicio que se encarga de comunicar backend y Frontend para el método Get con parámetros
   */
     getSingleCliente(id): Observable<Clientes> {
      const urls = 'https://localhost:44384/api/Clientes/' + id;
  
      return this.http.get<Clientes>(urls);
    }
    /**
   * Servicio que se encarga de comunicar backend y Frontend para el método Put
   */
     putClientes(form: Clientes): Observable<ResponseI>{
      const urls = 'https://localhost:44384/api/Clientes/ActualizarCliente';
  
      const params = new HttpHeaders().set('Content-type', 'application/json');
  
      return this.http.put<ResponseI>(urls, form, {headers: params});
    }
}
