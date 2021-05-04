import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-creacion-venta',
  templateUrl: './creacion-venta.component.html',
  styleUrls: ['./creacion-venta.component.scss']
})
export class CreacionVentaComponent  {  
  /**
   * Declaración para poder manipular la información del formulario
   */
   options: FormGroup;

   constructor(fb: FormBuilder) {
     this.options = fb.group({      
       IDcliente: [null, Validators.required],
       IDempleado: [null,Validators.required],
              
     });
    }
}
