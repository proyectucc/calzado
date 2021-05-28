import { Component, OnInit,
  ViewChild,
  ɵpatchComponentDefWithScope,} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Clientes } from 'src/app/models/clientes';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services//identificacion/identificacion.service';
import { ClienteService } from 'src/app/services/clientes/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreacionComponent } from '../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../modal/models/modal.model';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {
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
  crearFrom: FormGroup;

  /**
   * Objeto que contiene los campos de los documentos
   */
   typeDocuments: TipoDocumento;
  constructor(
    fb: FormBuilder,
    private document: IdentificacionService,
    private cliente: ClienteService ) {
    this.crearFrom = fb.group({
      primerNombre: [null, Validators.required],
      segundoNombre: [null, Validators.required],
      primerApellido: [null, Validators.required],
      segundoApellido: [null, Validators.required],
      idTipoIdent: [null, Validators.required],
      numeroIdentificacion: [null, Validators.required],
      direccion: [null, Validators.required],
      email: [null, Validators.required],
      //secundarioEmail: [null],
      telefonoFijo: [null, Validators.required],
      telefonoCelular: [null, Validators.required],

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
  }
  postForm(form: Clientes){
    //console.log(form);
    this.cliente.addClientes(form).subscribe((data)=>{
      console.log('GUARDAR',data)
    });
  }
  /**
   * Abre el componente hijo de dialogo
   */
   public openModal() {
    this.dialogForm.onShowDialog();
  }
}
