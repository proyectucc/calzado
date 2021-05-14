import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OneEmpleado } from 'src/app/models/empleado.interface';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
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
    private api: UsuarioService
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
    };
  }

  /**
   * Se ejecuta cuando se inicializa el componente
   */
  public ngOnInit(): void {
    this.usuarioService.cargarEmpleados().subscribe((resp) => {
      this.emp = resp;
      console.log(this.emp);
    });
  }

  editarEmpleado(id) {
    this.usuarioService.getSingleEmpleado(id).subscribe((data) => {
      this.router.navigate(['edit-empl', data.idEmpleado]);
      console.log(data);
      console.log(id);
    });
  }

  eliminar(id) {
    console.log(id);
    this.api.deleteEmpleado(id).subscribe();

    this.dialogForm.onShowDialog();
  }
}
