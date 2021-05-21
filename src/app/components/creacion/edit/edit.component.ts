<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services//identificacion/identificacion.service';
<<<<<<< HEAD
import { Empleados } from '../../../models/empleados';
=======
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import * as moment from 'moment';
import { RolService } from 'src/app/services/roles/rol.service';
import { Roles } from 'src/app/models/roles.interface';
<<<<<<< HEAD
import { NgxSpinnerService } from 'ngx-spinner';

=======
import { Router, ActivatedRoute } from '@angular/router';
import { DatosEmpleado } from 'src/app/models/empleados.interface';
import { ModalParameters } from '../../modal/models/modal.model';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
<<<<<<< HEAD
export class EditComponent {
=======
export class EditComponent implements OnInit {
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
  /**
   * Declaración para poder manipular la información del formulario
   */
  editarForm: FormGroup;

<<<<<<< HEAD
  /**
   * Objeto que contiene los campos de los empleados
   */
  datosEmpleados: Empleados;
  /**
   * Objeto que contiene los campos de los empleados
   */
  typeDocuments: TipoDocumento;
=======
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
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

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
<<<<<<< HEAD
    private roles: RolService
  ) {
    this.editarForm = fb.group({
      nameOne: [null, Validators.required],
      nameTwo: [null],
      lastNameOne: [null, Validators.required],
      lastNameTwo: [null],
      typeDocument: [null, Validators.required],
      numberIdentification: [null, Validators.required],
      dateBirthday: [{ value: null, disabled: true }],
      dateHiring: [{ value: null, disabled: true }],
      dateEndHiring: [null],
      principalEmail: [null, Validators.required],
      phone: [null],
      cellPhone: [null, Validators.required],
      rol: [null, Validators.required],
    });
=======
    private roles: RolService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editarForm = fb.group({
      idEmpleado: [''],
      primerNombre: ['', [Validators.required, Validators.minLength(3)]],
      segundoNombre: [''],
      primerApellido: ['', [Validators.required, Validators.minLength(3)]],
      segundoApellido: [''],
      idTipoIdent: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      fechaContratacion: ['', Validators.required],
      fechaTerminacion: ['', Validators.required],
      emailPrincipal: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      telefonoFijo: [0, [Validators.required, Validators.minLength(5)]],
      telefonoCelular: [0, [Validators.required, Validators.minLength(5)]],
      rol: ['', Validators.required],
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
      centerButtonLogin: {
        name: 'Cerrar',
        isEnable: false,
      },
    };
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
  }

  /**
   * Se ejecuta cuando se invoca el componente
   */
  ngOnInit() {
    this.document.cargardocumentos().subscribe((data) => {
      this.typeDocuments = data;
<<<<<<< HEAD
      console.log('documentos', this.typeDocuments);
=======
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
    });

    this.roles.cargarRoles().subscribe((roles) => {
      this.rol = roles;
<<<<<<< HEAD
      console.log('Roles', this.rol);
    });
    const dataEmpleado = JSON.parse(localStorage.getItem('empleado') || '');
    this.datosEmpleados = dataEmpleado;
    this.editarForm.setValue({
      nameOne: dataEmpleado.primerNombre,
      nameTwo: dataEmpleado.segundoNombre,
      lastNameOne: dataEmpleado.primerApellido,
      lastNameTwo: dataEmpleado.segundoApellido,
      typeDocument: dataEmpleado.mask,
      numberIdentification: dataEmpleado.numeroIdentificacion,
      dateBirthday: moment(dataEmpleado?.fechaNacimiento).format('YYYY-MM-DD'),
      dateHiring: moment(dataEmpleado?.fechaContratacion).format('YYYY-MM-DD'),
      dateEndHiring: moment(dataEmpleado?.fechaTerminacion).format(
        'YYYY-MM-DD'
      ),
      principalEmail: dataEmpleado.emailPrincipal,
      phone: dataEmpleado.telefonoFijo,
      cellPhone: dataEmpleado.telefonoCelular,
      rol: dataEmpleado.rol,
    });
  }

  postForm(form: Empleados) {}
=======
      console.log(this.rol);
    });
    const empleadoid = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getSingleEmpleado(empleadoid).subscribe((data) => {
      this.datosEmpleados = data;
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

  putForm(empleado: DatosEmpleado) {
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
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
}
