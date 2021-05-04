import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/models/empleados';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services/identificacion/identificacion.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  /**
   * Lista de empleados
   */
  public emp: Empleados = [];


  /**
   * Objeto que contiene los campos de los empleados
   */
   typeDocuments: TipoDocumento;

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private document: IdentificacionService
  ) {}
  public user: Empleados[];
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  longitud: number;

  /**
   * Se ejecuta cuando se inicializa el componente
   */
  public ngOnInit(): void {
    this.usuarioService.cargarEmpleados().subscribe((resp) => {
      this.emp = resp;
      console.log('DATOS', resp);
    });
  }

  editarEmpleado(id) {
    this.router.navigate(['edit-empl/:id', id]);
    localStorage.setItem('empleado', JSON.stringify(id));
  }
}
