import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from 'src/app/models/clientes';
import { Empleados } from 'src/app/models/empleados';
import { Productos } from 'src/app/models/productos';
import { TipoPago } from 'src/app/models/tipo-pago';
import { Ventasdetalle } from 'src/app/models/vendetalle';
import { ClienteService } from 'src/app/services/clientes/cliente.service';
import { PagoService } from 'src/app/services/Pagos/pago.service';
import { productoService } from 'src/app/services/productos/producto.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { VentadetalleService } from 'src/app/services/ventasdetalles/ventadetalle.service';
import { ModalCreacionComponent } from '../../modal/modal-creacion/modal-creacion.component';
import { ModalParameters } from '../../modal/models/modal.model';
import { VentaService } from 'src/app/services/ventas/venta.service';
import { Ventas } from 'src/app/models/ventas';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creacion-venta',
  templateUrl: './creacion-venta.component.html',
  styleUrls: ['./creacion-venta.component.scss'],
})
export class CreacionVentaComponent implements OnInit {
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

  cventaFrom: FormGroup;
  detalles: FormGroup;

  // visible formulario
  mostrardetalles: boolean;
  mostrarven: boolean;
  deet: boolean;

  cli: Clientes;
  empl: Empleados;
  tpago: TipoPago;
  prod: Productos;
  ventau: Ventas;

  constructor(
    fb: FormBuilder,
    private pago: PagoService,
    private empleado: UsuarioService,
    private cliente: ClienteService,
    private producto: productoService,
    private det: VentadetalleService,
    private ven: VentaService
  ) {
    this.cventaFrom = fb.group({
      idCliente: [null, Validators.required],
      idEmpleado: [null, Validators.required],
      fechaVenta: [null, Validators.required],
      idTipoPago: [null, Validators.required],
    });

    this.detalles = fb.group({
      idProducto: ['', Validators.required],
      idVenta: ['', Validators.required],
      valorUnit: ['', Validators.required],
      cantidad: ['', Validators.required],
      valorTotal: ['', Validators.required],
    });
    this.modalParameters = {
      icon: {
        isEnable: false,
        type: 'done',
      },
      title: 'Creación exitosa',
      body: 'Se ha creado correctamente el registro de la venta',
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
    this.cliente.cargarClientes().subscribe((data) => {
      this.cli = data;
      console.log('cliente', this.cli);
    });
    this.empleado.cargarEmpleados().subscribe((empe) => {
      this.empl = empe;
      console.log('empleado', this.empl);
    });
    this.pago.cargarPago().subscribe((p) => {
      this.tpago = p;
      console.log('Pagos', this.tpago);
    });
    this.producto.cargarproducto().subscribe((prodd) => {
      this.prod = prodd;
      console.log('Producto', this.prod);
    });
    this.ven.getultimaVenta().subscribe((ul) => {
      this.ventau = ul;
      console.log('id', this.ventau);
    });

    }

    postForm(form: Ventas){
      console.log('datos',form);
      this.ven.addVentas(form).subscribe((venta)=>{
        console.log('GUARDARV',venta)
      });
    }
    postdetalle(form1: Ventasdetalle){
      this.det.adddetalle(form1).subscribe((de)=>{
        console.log('GUARDARD',de)
      });
    }

  activarform(): void {
    this.mostrardetalles = true;
    this.mostrarven = true;
  }

  /**
   * Abre el componente hijo de dialogo
   */
  public openModal() {
    this.dialogForm.onShowDialog();
  }
}
