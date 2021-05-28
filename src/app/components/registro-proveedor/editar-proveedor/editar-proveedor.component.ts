import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedores } from 'src/app/models/proveedores';
import { ProveedorService } from 'src/app/services/proveedores/proveedor.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.scss']
})
export class EditarProveedorComponent implements OnInit {

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
   editarfrom: FormGroup;
   datosProveedor: Proveedores;
  /**
   * Se crea una instancia de la clase
   */
  constructor(fb: FormBuilder,
    private prov: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.editarfrom = fb.group({
      idProveedor: [ " " ],
      nombreProveedor:  ['', [Validators.required,Validators.minLength(3)]],
      nit: [" ", Validators.required],
      telefonoFijo: [0, [Validators.required,Validators.minLength(5)]],
      telefonoCelular: [0, [Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required,Validators.minLength(5), Validators.email]],
      direccion: [null, Validators.required],
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
  ngOnInit(){
    const proveedorid = this.activatedRoute.snapshot.paramMap.get('id');

    this.prov.getSingleProveedor(proveedorid).subscribe((data) => {
      this.datosProveedor = data;
      this.editarfrom.setValue({
        nombreProveedor: this.datosProveedor.nombreProveedor,
        nit: this.datosProveedor.nit,
        telefonoFijo: this.datosProveedor.telefonoFijo,
        telefonoCelular: this.datosProveedor.telefonoCelular,
        email: this.datosProveedor.email,
        direccion: this.datosProveedor.direccion,
        idProveedor: this.datosProveedor.idProveedor,
      });
    });
  }

  putForm(proveedor: Proveedores) {
    this.prov.putProveedores(proveedor).subscribe((data) => {
      console.log('actualizar', data);
    });

   }

  /**
   * Abre el componente hijo de dialogo
   */
   public openModal() {
    this.dialogForm.onShowDialog();
  }
}
