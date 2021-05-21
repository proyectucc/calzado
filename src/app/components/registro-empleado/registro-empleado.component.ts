<<<<<<< HEAD
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
=======
import {
  Component,
  OnInit,
  ViewChild,
  ɵpatchComponentDefWithScope,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OneEmpleado } from 'src/app/models/empleado.interface';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services//identificacion/identificacion.service';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { RolService } from 'src/app/services/roles/rol.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'src/app/models/roles.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreacionComponent } from '../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../modal/models/modal.model';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
<<<<<<< HEAD
  styleUrls: ['./registro-empleado.component.scss']
})
export class RegistroEmpleadoComponent {
=======
  styleUrls: ['./registro-empleado.component.scss'],
})
export class RegistroEmpleadoComponent implements OnInit {
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
   * Objeto que contiene los campos de los empleados
   */
  typeDocuments: TipoDocumento;

  /**
   * Objeto que trae los campos de roles
   */
  rol: Roles;
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

  /**
   * Declaración para poder manipular la información del formulario
   */
<<<<<<< HEAD
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      nameOne: [null, Validators.required],
      nameTwo: [null],
      lastNameOne: [null, Validators.required],
      lastNameTwo: [null],
      typeDocument: [null, Validators.required],
      numberIdentification: [null, Validators.required],
      dateBirthday: [null, Validators.required],
      dateHiring: [null, Validators.required],
      dateEndHiring: [null],
      principalEmail: [null, Validators.required],
      phone: [null],
      cellPhone: [null, Validators.required],
      rol: [null, Validators.required],
    });
  }

=======
  nuevoForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private api: UsuarioService,
    private document: IdentificacionService,
    private activerouter: ActivatedRoute,
    private router: Router,
    private roles: RolService,
    public dialog: MatDialog
  ) {
    this.nuevoForm = fb.group({
      PrimerNombre: [null, Validators.required],
      SegundoNombre: [null, Validators.required],
      PrimerApellido: [null, Validators.required],
      SegundoApellido: [null, Validators.required],
      IdTipoIdent: [null, Validators.required],
      NumeroIdentificacion: [null, Validators.required],
      FechaNacimiento: [null, Validators.required],
      FechaContratacion: [null, Validators.required],
      FechaTerminacion: [null, Validators.required],
      EmailPrincipal: [null, Validators.required],
      TelefonoFijo: [null, Validators.required],
      TelefonoCelular: [null, Validators.required],
      Rol: [null, Validators.required],
    });

    this.modalParameters = {
      icon: {
        isEnable: false,
        type: 'done',
      },
      title: 'Creación exitosa',
      body: 'Se ha creado correctamente el registro',
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

  ngOnInit(): void {
    this.document.cargardocumentos().subscribe((data) => {
      this.typeDocuments = data;
      console.log('documentos', this.typeDocuments);
    });

    this.roles.cargarRoles().subscribe((roles) => {
      this.rol = roles;
      console.log('Roles', this.rol);
    });
  }

  postform(form: OneEmpleado) {
    this.api.postEmpleados(form).subscribe((data) => {
      console.log('guardar', data);
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
