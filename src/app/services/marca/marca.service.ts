import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { marca } from '../../models/marca';

@Injectable({
  providedIn: 'root',
})
export class marcaService {

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(private http: HttpClient) {}

  /**
   * Servicio que contiene el array de marca
   */
  cargarmarca() {
    const urls = 'https://localhost:44384/api/Marca/MostrarMarca';

    return this.http.get<marca>(urls);
  }

}
