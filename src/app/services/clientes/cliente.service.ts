// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Clientes } from 'src/app/models/clientes';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClienteService {

//   constructor(private http: HttpClient) { }

//   cargarClientes() {
//     const urls = 'https://localhost:44384/api/Clientes/MostrarClientes';

//     return this.http.get<Clientes>(urls);
//   }
//   addClientes(cliente: Clientes): Observable<Clientes>{
//     const urls ='https://localhost:44384/api/Clientes';
//     return this.http.post<Clientes>(urls,cliente)
//   }
// }
