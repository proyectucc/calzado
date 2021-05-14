import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services//identificacion/identificacion.service';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import * as moment from 'moment';
import { RolService } from 'src/app/services/roles/rol.service';
import { Roles } from 'src/app/models/roles.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosEmpleado } from 'src/app/models/empleados.interface';
import { PutEmpleado } from 'src/app/models/put-empleado.interface';
import { ModalParameters } from '../../modal/models/modal.model';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  /**
   * Declaración para poder manipular la información del formulario
   */
  editarForm: FormGroup;

  // /**
  //  * Objeto que contiene los campos de los empleados
  //  */
  datosEmpleados: DatosEmpleado;
  // datosEmpleados: Empleados;
  /**
   * Objeto que contiene los campos de los empleados
   */
  typeDocuments: TipoDocumento;

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
   * Objeto que trae los campos de roles
   */
  rol: Roles;

  /**
   * Observable encargado de eliminar los diferentes sucriptores
   */
  public destroy$ = new Subject<boolean>();

  constructor(
    fb: FormBuilder,
    private api: UsuarioService,
    private document: IdentificacionService,
    private roles: RolService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editarForm = fb.group({
      idEmpleado: [''],
      primerNombre: [null, Validators.required],
      segundoNombre: [null],
      primerApellido: [null, Validators.required],
      segundoApellido: [null],
      idTipoIdent: [null, Validators.required],
      numeroIdentificacion: [null, Validators.required],
      fechaNacimiento: [null, Validators.required],
      fechaContratacion: [null, Validators.required],
      fechaTerminacion: [null, Validators.required],
      emailPrincipal: [null, Validators.required],
      telefonoFijo: [null, Validators.required],
      telefonoCelular: [null, Validators.required],
      rol: [null, Validators.required],
    });

    this.modalParameters = {
      icon: {
        isEnable: false,
        type: 'done',
      },
      title: 'Actualización exitosa',
      body: 'Se ha actualizado correctamente el registro',
      centerButton: {
        name: 'Cerrar',
        isEnable: true,
      },
    };
  }

  /**
   * Se ejecuta cuando se invoca el componente
   */
  ngOnInit() {
    this.document.cargardocumentos().subscribe((data) => {
      this.typeDocuments = data;
    });

    this.roles.cargarRoles().subscribe((roles) => {
      this.rol = roles;
      console.log(this.rol);
    });
    const empleadoid = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getSingleEmpleado(empleadoid).subscribe((data) => {
      this.datosEmpleados = data;
      //var idEmpleado = data.idEmpleado;
      this.editarForm.setValue({
        primerNombre: this.datosEmpleados.primerNombre,
        segundoNombre: this.datosEmpleados.segundoNombre,
        primerApellido: this.datosEmpleados.primerApellido,
        segundoApellido: this.datosEmpleados.segundoApellido,
        idTipoIdent: this.datosEmpleados.idTipoIdent,
        numeroIdentificacion: this.datosEmpleados.numeroIdentificacion,
        fechaNacimiento: moment(this.datosEmpleados?.fechaNacimiento).format(
          'YYYY-MM-DD'
        ),
        fechaContratacion: moment(
          this.datosEmpleados?.fechaContratacion
        ).format('YYYY-MM-DD'),
        fechaTerminacion: moment(this.datosEmpleados?.fechaTerminacion).format(
          'YYYY-MM-DD'
        ),
        emailPrincipal: this.datosEmpleados.emailPrincipal,
        telefonoFijo: this.datosEmpleados.telefonoFijo,
        telefonoCelular: this.datosEmpleados.telefonoCelular,
        rol: this.datosEmpleados.rol,
        idEmpleado: this.datosEmpleados.idEmpleado,
      });
    });
  }

  putForm(empleado: PutEmpleado) {
    this.api.putEmpleados(empleado).subscribe((data) => {
      console.log('actualizar', data);
    });
  }

  /**
   * Abre el componente hijo de dialogo
   */
  public openModal() {
    this.dialogForm.onShowDialog();
  }
}
