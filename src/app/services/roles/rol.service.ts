import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from 'src/app/models/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  cargarRoles() {
    const url = 'https://localhost:44384/api/Roles';

    return this.http.get<Roles>(url);
  }
}
