import { Component } from '@angular/core';
import { Location } from '@angular/common';

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

  constructor(location: Location) {
    this.location = location;
   }

  /**
   * Método que se ejecuta cuando se da clic en el botón Atrás
   */
     public onBack(): void {
      this.location.back();
    }

}
