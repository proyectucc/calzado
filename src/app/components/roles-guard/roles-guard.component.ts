import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuarioEmpleadoService } from 'src/app/services/usuario-empleado/usuario-empleado.service';
@Injectable({
  providedIn: 'root',
})
export class RolesGuard implements CanActivate {
  rol: Usuario[];

  constructor(
    private router: Router,
    private userService: UsuarioEmpleadoService
  ) {}

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

  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    // this.userService.cargarusuarios().subscribe(data => {
    //   this.rol = data;
    //   console.log(this.rol.includes(route.data.rol));
    // });
    //const servant = JSON.parse(localStorage.getItem('UsuarioLogueado'));
    const { scopes = [] } = JSON.parse(localStorage.getItem('UsuarioLogueado'));
    console.log(scopes);

    return true;

    // if (this.rol.includes(route.data.rol)) {
    //   return true;
    // } else {
    //   console.log('NO TIENE ROL');
    //   return false;
    // }
  }
}
