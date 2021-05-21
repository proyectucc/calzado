<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioEmpleadoService } from 'src/app/services/usuario-empleado/usuario-empleado.service';
import { ModalCreacionComponent } from '../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../modal/models/modal.model';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /**
   * Permite la configuración de los campos del formulario
   */
   public formBuilder: FormBuilder;

   /**
    * Permite crear grupos de controles para un formulario
    */
   public frmGroup: FormGroup;

   /**
    * instancia de la clase
    */
   constructor(formBuilder: FormBuilder) {

     this.formBuilder = formBuilder;

     this.frmGroup = this.formBuilder.group({
       email: ['', Validators.required],
       pass: ['', Validators.required],
     });

   }

=======
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
   * Permite la configuración de los campos del formulario
   */
  public formBuilder: FormBuilder;

  /**
   * Permite crear grupos de controles para un formulario
   */
  public frmGroup: FormGroup;

  /**
   * instancia de la clase
   */
  constructor(
    private usuarioService: UsuarioEmpleadoService,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formBuilder = formBuilder;

    this.frmGroup = this.formBuilder.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });

    this.modalParameters = {
      icon: {
        isEnable: false,
        type: 'done',
      },
      title: 'Credenciales erradas',
      centerButton: {
        name: 'Cerrar',
        isEnable: false,
      },
      centerButtonLogin: {
        name: 'Cerrar',
        isEnable: true,
      },
    };
  }
  ngOnInit(): void {}

  /**
   * Evento que se ejecuta cuando el usuario se loguea
   */
  onLogin() {
    const data = this.frmGroup.value;
    this.usuarioService.loginUsuario(data.email, data.pass).subscribe(
      (info) => {
        console.log('logueado', info);
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error);
        this.dialogForm.onShowDialog();
      }
    );
  }
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
}
