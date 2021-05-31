import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { categoria } from 'src/app/models/categoria';
import { marca } from 'src/app/models/marca';
import { productos } from 'src/app/models/productos';
import { categoriaService } from 'src/app/services/categoria/categoria.service';
import { marcaService } from 'src/app/services/marca/marca.service';
import { productoService } from 'src/app/services/productos/producto.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.scss']
})
export class EditarProductosComponent implements OnInit {

  public modalParameters: ModalParameters;

  /**
   * Obtiene el componente dialogo formulario
   */
  @ViewChild('dialogForm')
  private readonly dialogForm!: ModalCreacionComponent;
  /**
   * Objeto que contiene los campos de los prods
   */
  marca: marca;

  datosProductos: productos;
  /**
   * Objeto que trae los campos de roles
   */
  categoria: categoria;

  editarpro: FormGroup;

  constructor(fb: FormBuilder,private nomarca:marcaService,private nomcategoria:categoriaService,private producto:productoService,private activatedRoute: ActivatedRoute,) { 

    this.editarpro = fb.group({
      idProducto: ['', Validators.required],
      idCategoria: ['', Validators.required],
      idMarca: ['', Validators.required],
      costoCompra: ['', Validators.required],
      costoVenta: ['',Validators.required],
      cantidad: ['', Validators.required],
      descripcion: [''],
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

ngOnInit(): void {
    this.nomarca.cargarmarca().subscribe((data) => {
      this.marca = data;
      console.log('marca', this.marca);
    });

    this.nomcategoria.cargarcategoria().subscribe((roles) => {
      this.categoria = roles;
      console.log('categoria', this.categoria);
    });

    const productoid = this.activatedRoute.snapshot.paramMap.get('id');

    this.producto.getSingleproductos(productoid).subscribe((data) => {
      this.datosProductos = data;
      this.editarpro.setValue({
        idCategoria: this.datosProductos.idCategoria,
        idMarca: this.datosProductos.idMarca,
        costoCompra: this.datosProductos.costoCompra,
        costoVenta: this.datosProductos.costoVenta,
        cantidad: this.datosProductos.cantidad,
        descripcion: this.datosProductos.descripcion,
        idProducto: this.datosProductos.idProducto
      });
    });
  }
  putForm(prod: productos) {
    this.producto.putproductos(prod).subscribe((data) => {
      console.log('actualizar', data);
    });
  }
  public openModal() {
    this.dialogForm.onShowDialog();
  }

}
