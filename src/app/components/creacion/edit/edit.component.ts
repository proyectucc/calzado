import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services//identificacion/identificacion.service';
import { Empleados } from '../../../models/empleados';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import * as moment from 'moment';
import { RolService } from 'src/app/services/roles/rol.service';
import { Roles } from 'src/app/models/roles.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  /**
   * Declaración para poder manipular la información del formulario
   */
  editarForm: FormGroup;

  /**
   * Objeto que contiene los campos de los empleados
   */
  datosEmpleados: Empleados;
  /**
   * Objeto que contiene los campos de los empleados
   */
  typeDocuments: TipoDocumento;

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
  }

  /**
   * Se ejecuta cuando se invoca el componente
   */
  ngOnInit() {
    this.document.cargardocumentos().subscribe((data) => {
      this.typeDocuments = data;
      console.log('documentos', this.typeDocuments);
    });

    this.roles.cargarRoles().subscribe((roles) => {
      this.rol = roles;
      console.log('Roles', this.rol);
    })
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
      dateEndHiring: moment(dataEmpleado?.fechaTerminacion).format('YYYY-MM-DD'),
      principalEmail: dataEmpleado.emailPrincipal,
      phone: dataEmpleado.telefonoFijo,
      cellPhone: dataEmpleado.telefonoCelular,
      rol: dataEmpleado.rol,
    });
  }

  postForm(form: Empleados) {
  }
}
