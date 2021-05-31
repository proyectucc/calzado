import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OneEmpleado } from 'src/app/models/empleado.interface';
import { Roles } from 'src/app/models/roles.interface';
import { Usuario } from 'src/app/models/usuario.interface';
import { RolService } from 'src/app/services/roles/rol.service';
import { UsuarioEmpleadoService } from 'src/app/services/usuario-empleado/usuario-empleado.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  /**
   * Configuracion de dialogo formulario
   */
  public modalParameters: ModalParameters;

  /**
   * Lista de empleados
   */
  public emp: OneEmpleado;

  /**
   * Objeto que trae los campos de roles
   */
  rol: Roles;

  /**
   * Obtiene el componente dialogo formulario
   */
  @ViewChild('dialogForm')
  private readonly dialogForm!: ModalCreacionComponent;
  /**
   * Declaración para poder manipular la información del formulario
   */
  editarForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private userService: UsuarioEmpleadoService,
    private api: UsuarioService,
    private roles: RolService,
  ) {
    this.editarForm = fb.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(5)]],
      contraseña: ['', [Validators.required, Validators.minLength(5)]],
      fechaCreacion: ['', Validators.required],
      fechaTerminacion: ['', Validators.required],
      idEmpleado: ['', Validators.required],
      Rol: [null, Validators.required],
    });

    this.modalParameters = {
      icon: {
        isEnable: false,
        type: 'done',
      },
      title: 'Creado exitosamente',
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

  /**
   * Método que se ejecuta cuando se inicia el componente
   */
  ngOnInit(): void {
    this.api.cargarEmpleados().subscribe((resp) => {
      this.emp = resp;
    });
    this.roles.cargarRoles().subscribe((roles) => {
      this.rol = roles;
      console.log('Roles', this.rol);
    });
  }

  postform(form: Usuario) {
    this.userService.postUsuario(form).subscribe((data) => {
      console.log('guardar', data);
    });
  }

  /**
   * Abre el componente hijo de dialogo
   */
  public openModal() {
    this.dialogForm.onShowDialog();
  }
}
