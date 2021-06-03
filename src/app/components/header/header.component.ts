import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /**
   * Control de navegacion en pagina
   */
     private readonly location: Location;

  constructor(location: Location, private router: Router) {
    this.location = location;
   }

   /**
    * Método que se ejecuta cuando se desloguea de la app y limpia el localstorage
    */
   public logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
   }

  /**
   * Método que se ejecuta cuando se da clic en el botón Atrás
   */
     public onBack(): void {
      this.location.back();
    }

}
