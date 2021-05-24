import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuarioEmpleadoService } from 'src/app/services/usuario-empleado/usuario-empleado.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  /**
   * Configuracion de dialogo formulario
   */
  public modalParameters: ModalParameters;

  /**
   * Obtiene el componente dialogo formulario
   */
  @ViewChild('dialogForm')
  private readonly dialogForm!: ModalCreacionComponent;
  f;
  /**
   * Contine la información del usuario a listar
   */
  public usuarios: Usuario[];

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(
    private userService: UsuarioEmpleadoService,
    private router: Router
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

  /**
   * Se ejecuta cuando se inicializa el componente
   */
  ngOnInit(): void {
    this.userService.cargarusuarios().subscribe((data) => {
      this.usuarios = data;
      console.log(data);
    });
  }

  crearUsuario() {
    this.router.navigate(['usuario-crear']);
  }

  /**
   * Método que se ejecuta para eliminar un registro
   * @param id Id del registro a eliminar
   */
  eliminar(id) {
    this.userService.delete(id).subscribe();

    this.dialogForm.onShowDialog();
  }

  /**
   * Método que se invoca para la edición del registro
   * @param id Id del usuario a editar
   */
  editarUsuario(id) {
    this.userService.getSingleUsuario(id).subscribe((data) => {
      this.router.navigate(['usuario-edit', data.idUsuario]);
      console.log(data);
    });
  }
}
