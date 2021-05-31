import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoria } from '../../models/categoria';

@Injectable({
  providedIn: 'root',
})
export class categoriaService {

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(private http: HttpClient) {}

  /**
   * Servicio que contiene el array de categoria
   */
  cargarcategoria() {
    const urls = 'https://localhost:44384/api/Categoria/MostrarCategoria';

    return this.http.get<categoria>(urls);
  }

}
