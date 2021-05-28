import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder,  FormGroup,  Validators,} from '@angular/forms';
import { Proveedores } from 'src/app/models/proveedores';
import { ProveedorService } from 'src/app/services/proveedores/proveedor.service';
import { ModalCreacionComponent } from '../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../modal/models/modal.model';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.scss'],
})
export class RegistroProveedorComponent implements OnInit {
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
   crearfrom: FormGroup;

  /**
   * Se crea una instancia de la clase
   */
  constructor(fb: FormBuilder,
    private prov: ProveedorService) {
    this.crearfrom = fb.group({
      nombreProveedor: [null, Validators.required],
      nit: [null, Validators.required],
      telefonoFijo: [null,Validators.required],
      telefonoCelular: [null, Validators.required],
      email: [null, Validators.required],
      direccion: [null, Validators.required],
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
  ngOnInit() {

  }
  postForm(form: Proveedores){
    this.prov.addProveedores(form).subscribe((data)=>{
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
