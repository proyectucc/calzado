import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.scss']
})
export class RegistroProveedorComponent{

  /**
   * Declaración para poder manipular la información del formulario
   */
  options: FormGroup;

  /**
   * Se crea una instancia de la clase
   */
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      name: [null, Validators.required],
      nit: [null, Validators.required],
      phone: [null],
      cellPhone: [null, Validators.required],
      principalEmail: [null, Validators.required],
      secodEmail: [null],
    });
  }

}
