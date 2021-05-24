import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from 'src/app/models/ventas';
import { ResponseI } from 'src/app/models/response.interface';
import { Ventasdetalle } from 'src/app/models/vendetalle';

@Injectable({
  providedIn: 'root'
})
export class VentadetalleService {

  constructor(private http: HttpClient) { }

  cargarVentasde() {
    const urls = 'https://localhost:44384/api/VentasDetalles/MostrarVentasDetalles';

    return this.http.get<Ventas>(urls);
  }
  adddetalle(venta: Ventasdetalle): Observable<Ventasdetalle>{
    const urls ='https://localhost:44384/api/VentasDetalles/CrearVentaDetalles';
    return this.http.post<Ventasdetalle>(urls,venta)
  }

}
