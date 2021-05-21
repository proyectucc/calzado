<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/models/empleados';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services/identificacion/identificacion.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OneEmpleado } from 'src/app/models/empleado.interface';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
<<<<<<< HEAD

  /**
   * Lista de empleados
   */
  public emp: Empleados = [];

=======
  /**
   * Configuracion de dialogo formulario
   */
  public modalParameters: ModalParameters;

  /**
   * Obtiene el componente dialogo formulario
   */
  @ViewChild('dialogForm')
  private readonly dialogForm!: ModalCreacionComponent;
  /**
   * Lista de empleados
   */
  public emp: OneEmpleado;
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

  /**
   * Objeto que contiene los campos de los empleados
   */
<<<<<<< HEAD
   typeDocuments: TipoDocumento;
=======
  typeDocuments: TipoDocumento;
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
<<<<<<< HEAD
    private document: IdentificacionService
  ) {}
  public user: Empleados[];
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  longitud: number;
=======
    //private api: UsuarioService
  ) {
    this.modalParameters = {
      icon: {
        isEnable: false,
        type: 'done',
      },
      title: 'Eliminación exitosa',
      body: 'Se ha eliminado correctamente el registro',
      centerButton: {
        name: 'Cerrar',
        isEnable: true,
      },
      centerButtonLogin: {
        name: 'Cerrar',
        isEnable: false,
      },
    };
  }
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

  /**
   * Se ejecuta cuando se inicializa el componente
   */
  public ngOnInit(): void {
    this.usuarioService.cargarEmpleados().subscribe((resp) => {
      this.emp = resp;
<<<<<<< HEAD
      console.log('DATOS', resp);
    });
  }

  editarEmpleado(id) {
    this.router.navigate(['edit-empl/:id', id]);
    localStorage.setItem('empleado', JSON.stringify(id));
=======
    });
  }

  /**
   * Método que se ejecuta para la edición de un registro
   */
  editarEmpleado(id) {
    this.usuarioService.getSingleEmpleado(id).subscribe((data) => {
      this.router.navigate(['edit-empl', data.idEmpleado]);
    });
  }

  /**
   * Método que se ejecuta para la eliminación de un registro
   */
  eliminar(id) {
    this.usuarioService.deleteEmpleado(id).subscribe();

    this.dialogForm.onShowDialog();
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
  }
}
