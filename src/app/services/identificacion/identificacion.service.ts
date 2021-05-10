import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDocumento } from '../../models/tipo-identificacion.iterface';

@Injectable({
  providedIn: 'root'
})
export class IdentificacionService {

  constructor(private http: HttpClient) { }

  cargardocumentos() {
    const url = 'https://localhost:44384/api/TipoIdentificacion';

    return this.http.get<TipoDocumento>(url);
  }
}
