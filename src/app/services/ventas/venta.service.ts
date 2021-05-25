import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from 'src/app/models/ventas';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  cargarVentas() {
    const urls = 'https://localhost:44384/api/Ventas/MostrarVentas';

    return this.http.get<Ventas>(urls);
  }
  addVentas(venta: Ventas): Observable<Ventas>{
    const urls ='https://localhost:44384/api/Ventas/CrearVenta';
    return this.http.post<Ventas>(urls,venta)
  }
    /**
   * Servicio que se encarga de comunicar backend y Frontend para el método Get con parámetros
   */
     getultimaVenta(){
      const urls = 'https://localhost:44384/api/Ventas/ultima';

      return this.http.get<Ventas>(urls);
    }
}
