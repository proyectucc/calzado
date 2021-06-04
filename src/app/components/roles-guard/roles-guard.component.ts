import { Injectable, ViewChild } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.interface';
import { HomeComponent } from '../home/home.component';
import { ModalParameters } from '../modal/models/modal.model';
@Injectable({
  providedIn: 'root',
})
export class RolesGuard implements CanActivate {

  scopes: Array<Usuario> = [];

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkUserLogin(route);
  }

  /**
   * Método que realiza la validación si el usuario logueado tiene acceso a la ruta definida
   */
  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    const servant = JSON.parse(localStorage.getItem('UsuarioLogueado'));
    const data = Object.values(servant);

    if (data.includes(route.data.rol)) {
      return true;
    } else {
      this.router.navigate(['/forbbiden']);
      return false;
    }
  }
}
