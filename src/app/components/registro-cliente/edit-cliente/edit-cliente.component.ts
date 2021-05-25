import { Component , OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { Clientes } from 'src/app/models/clientes';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services//identificacion/identificacion.service';
import { ClienteService } from 'src/app/services/clientes/cliente.service';
import { ModalParameters } from '../../modal/models/modal.model';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent implements OnInit  {
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
   * Declaración para poder manipular la información del formulario
   */
   editarForm: FormGroup;

   /**
    * Objeto que contiene los campos de los documentos
    */
    typeDocuments: TipoDocumento;
    datosClientes: Clientes;
      /**
   * Observable encargado de eliminar los diferentes sucriptores
   */
  public destroy$ = new Subject<boolean>();
   constructor(
     fb: FormBuilder,
     private document: IdentificacionService,
     private api: ClienteService,
     private activatedRoute: ActivatedRoute,
     private router: Router
    ) {
     this.editarForm = fb.group({
       idCliente: [''],
       primerNombre: ['', [Validators.required,Validators.minLength(3)]],
       segundoNombre: [null],
       primerApellido: ['', [Validators.required,Validators.minLength(3)]],
       segundoApellido: [null],
       idTipoIdent: ['', Validators.required],
       numeroIdentificacion: ['', Validators.required],
       direccion: [null, Validators.required],
       email: ['', [Validators.required,Validators.minLength(5), Validators.email]],
       //secundarioEmail: [null],
       telefonoFijo: [0, [Validators.required,Validators.minLength(5)]],
       telefonoCelular: [0, [Validators.required,Validators.minLength(5)]],

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
      }
    };
    }
   /**
   * Se ejecuta cuando se invoca el componente
   */
   ngOnInit() {
     this.document.cargardocumentos().subscribe((data) => {
       this.typeDocuments = data;
       console.log('documentos', this.typeDocuments);
     });
     const clienteid = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getSingleCliente(clienteid).subscribe((data) => {
      this.datosClientes = data;
      this.editarForm.setValue({
        primerNombre: this.datosClientes.primerNombre,
        segundoNombre: this.datosClientes.segundoNombre,
        primerApellido: this.datosClientes.primerApellido,
        segundoApellido: this.datosClientes.segundoApellido,
        idTipoIdent: this.datosClientes.idTipoIdent,
        numeroIdentificacion: this.datosClientes.numeroIdentificacion,
        direccion: this.datosClientes.direccion,
        email: this.datosClientes.email,
        telefonoFijo: this.datosClientes.telefonoFijo,
        telefonoCelular: this.datosClientes.telefonoCelular,
        idCliente: this.datosClientes.idCliente,
      });
    });
  }

  putForm(cliente: Clientes) {
    this.api.putClientes(cliente).subscribe((data) => {
      console.log('actualizar', data);
    });

   }
   public openModal() {
    this.dialogForm.onShowDialog();
  }
}
