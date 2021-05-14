import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Clientes } from 'src/app/models/clientes';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { IdentificacionService } from 'src/app/services//identificacion/identificacion.service';
import { ClienteService } from 'src/app/services/clientes/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent {


  /**
   * Declaración para poder manipular la información del formulario
   */
  crearFrom: FormGroup;

  /**
   * Objeto que contiene los campos de los documentos
   */
   tipoIdents: TipoDocumento;
  constructor(
    fb: FormBuilder, 
    private document: IdentificacionService,
    private cliente: ClienteService ) {
    this.crearFrom = fb.group({
      primerNombre: [null, Validators.required],
      segundoNombre: [null],
      primerApellido: [null, Validators.required],
      segundoApellido: [null],
      tipoIdent: [null, Validators.required],
      numeroIdentificacion: [null, Validators.required],
      direccion: [null, Validators.required],
      email: [null, Validators.required],
      //secundarioEmail: [null],
      telefonoFijo: [null],
      telefonoCelular: [null, Validators.required],

    });
  }
  /**
  * Se ejecuta cuando se invoca el componente
  */
  ngOnInit() {
    this.document.cargardocumentos().subscribe((data) => {
      this.tipoIdents = data;
      console.log('documentos', this.tipoIdents);
    });     
  }
  postForm(form: Clientes){
    //console.log(form);
    this.cliente.addClientes(form).subscribe((data)=>{
      console.log('GUARDAR',data)
    });
  }
}