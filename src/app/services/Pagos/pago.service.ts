import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoPago } from '../../models/tipo-pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http: HttpClient) { }

  cargarPago() {
    const url = 'https://localhost:44384/api/TipoPago/MostrarTiposDePago';

    return this.http.get<TipoPago>(url);
  }
}
