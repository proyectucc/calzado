import {
  Component,
  OnInit,
  ViewChild,
  ɵpatchComponentDefWithScope,
}
 from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { categoriaService } from 'src/app/services/categoria/categoria.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { marcaService } from 'src/app/services//marca/marca.service';
import { categoria } from 'src/app/models/categoria';
import { marca } from 'src/app/models/marca';
import { Productos } from 'src/app/models/productos';
import { productoService } from 'src/app/services/productos/producto.service';
import { ModalParameters } from '../../modal/models/modal.model';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';

@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.scss']
})
export class CreacionProductosComponent implements OnInit {

  public modalParameters: ModalParameters;

  /**
   * Obtiene el componente dialogo formulario
   */
  @ViewChild('dialogForm')
  private readonly dialogForm!: ModalCreacionComponent;
  /**
   * Objeto que contiene los campos de los empleados
   */
  marca: marca;

  /**
   * Objeto que trae los campos de roles
   */
  categoria: categoria;

  crearpro: FormGroup;

  constructor(fb: FormBuilder,
    private nomarca:marcaService,
    private nomcategoria:categoriaService,
    private producto:productoService) {

    this.crearpro = fb.group({
      idCategoria: [null, Validators.required],
      idMarca: [null, Validators.required],
      nombreProducto: [null, Validators.required],
      costoCompra: [null, Validators.required],
      costoVenta: [null, Validators.required],
      cantidad: [null, Validators.required],
      descripcion: [null,Validators.required],
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
    this.nomarca.cargarmarca().subscribe((data) => {
      this.marca = data;
      console.log('marca', this.marca);
    });

    this.nomcategoria.cargarcategoria().subscribe((roles) => {
      this.categoria = roles;
      console.log('categoria', this.categoria);
    });
  }

  postfrom(pro: Productos) {
    this.producto.postproductos(pro).subscribe((data) => {
      console.log('guardar', data);
    });

  }
  public openModal() {
    this.dialogForm.onShowDialog();
  }
}
