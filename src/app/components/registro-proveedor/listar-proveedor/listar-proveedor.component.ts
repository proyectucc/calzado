import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedores } from 'src/app/models/proveedores';
import { ProveedorService } from 'src/app/services/proveedores/proveedor.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.scss'],
})
export class ListarProveedorComponent implements OnInit {
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
   * Lista de proveedores
   */
  public prov: Proveedores;
  /**
   * Crea una nueva instancia de la clase
   */
  constructor(
    private ProveedorService: ProveedorService,
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
      permissionButton: {
        name: 'Cerrar',
        isEnable: false,
      },
    };
  }
  /**
   * Se ejecuta cuando se inicializa el componente
   */
  public ngOnInit(): void {
    this.ProveedorService.cargarProveedores().subscribe((resp) => {
      this.prov = resp;
      console.log('DATOS', resp);
    });
  }

  /**
   * Método que se ejecuta para la edición de un registro
   */
  editarProveedor(id) {
    this.ProveedorService.getSingleProveedor(id).subscribe((data) => {
      this.router.navigate(['edit-proveedor', data.idProveedor]);
    });
  }
  /**
   * Método que se ejecuta para la eliminación de un registro
   */
  eliminarProveedor(id) {
    this.ProveedorService.deleteProveedor(id).subscribe();

    this.dialogForm.onShowDialog();
  }
}
