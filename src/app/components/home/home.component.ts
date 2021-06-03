import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalCreacionComponent } from '../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../modal/models/modal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('UsuarioLogueado'));
  }

  /**
   * Método que se ejecuta cuando se desloguea de la app y limpia el localstorage
   */
  public logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
