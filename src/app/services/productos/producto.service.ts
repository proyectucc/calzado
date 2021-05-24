import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos } from 'src/app/models/productos';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class productoService {

  constructor(private http: HttpClient) { }

  cargarproducto() {
    const urls = 'https://localhost:44384/api/Productos/MostrarProductos';

    return this.http.get<productos>(urls);
  }


}
