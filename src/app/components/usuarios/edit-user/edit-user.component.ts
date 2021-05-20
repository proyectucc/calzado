import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OneEmpleado } from 'src/app/models/empleado.interface';
import { Usuario } from 'src/app/models/usuario.interface';
import * as moment from 'moment';
import { UsuarioEmpleadoService } from 'src/app/services/usuario-empleado/usuario-empleado.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  /**
   * Declaración para poder manipular la información del formulario
   */
  editarForm: FormGroup;
  /**
   * Configuracion de dialogo formulario
   */
  public modalParameters: ModalParameters;

  /**
   * Contiene la información del usuario
   */
  datosUsuario: Usuario;

  /**
   * Obtiene el componente dialogo formulario
   */
  @ViewChild('dialogForm')
  private readonly dialogForm!: ModalCreacionComponent;

  /**
   * Lista de empleados
   */
  public emp: OneEmpleado;

  constructor(
    fb: FormBuilder,
    private api: UsuarioService,
    private userService: UsuarioEmpleadoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editarForm = fb.group({
      idUsuario: [''],
      nombreUsuario: ['', [Validators.required, Validators.minLength(4)]],
      contraseña: ['', [Validators.required, Validators.minLength(4)]],
      fechaCreacion: [null, Validators.required],
      fechaTerminacion: [null, Validators.required],
      idEmpleado: [null, Validators.required],
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
  }

  /**
   * Se ejecuta cuanso
   */
  ngOnInit(): void {
    this.api.cargarEmpleados().subscribe((resp) => {
      this.emp = resp;
    });

    const usuarioid = this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getSingleUsuario(usuarioid).subscribe((data) => {
      this.datosUsuario = data;
      this.editarForm.setValue({
        nombreUsuario: this.datosUsuario.nombreUsuario,
        contraseña: this.datosUsuario.contraseña,
        fechaCreacion: moment(this.datosUsuario.fechaCreacion).format(
          'YYYY-MM-DD'
        ),
        fechaTerminacion: moment(this.datosUsuario.fechaTerminacion).format(
          'YYYY-MM-DD'
        ),
        idEmpleado: this.datosUsuario.idEmpleado,
        idUsuario: this.datosUsuario.idUsuario,
      });
    });
  }

  /**
   * Método que se ejecuta para la edición del empleado
   * @param empleado Objeto con la edición
   */
  postForm(usuario: Usuario) {
    this.userService.putUsuario(usuario).subscribe((data) => {
      console.log('actualizar', data);
    });
    //console.log(usuario);
  }

  /**
   * Abre el componente hijo de dialogo
   */
  public openModal() {
    this.dialogForm.onShowDialog();
  }
}
