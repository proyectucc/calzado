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

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
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

  /**
   * Declaración para poder manipular la información del formulario
   */
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
      permissionButton: {
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
      this.dialogForm.onShowDialog();
    },
    error => {
      console.log('ya existe', error);
    }
    );
  }

  /**
   * Abre el componente hijo de dialogo
   */
  public openModal() {
    this.dialogForm.onShowDialog();
  }
}
