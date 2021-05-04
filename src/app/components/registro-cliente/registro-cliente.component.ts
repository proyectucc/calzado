import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent {


  /**
   * Declaración para poder manipular la información del formulario
   */
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({      
      nameOne: [null, Validators.required],
      nameTwo: [null],
      lastNameOne: [null, Validators.required],
      lastNameTwo: [null],
      typeDocument: [null, Validators.required],
      numberIdentification: [null, Validators.required],
      address: [null, Validators.required],
      principalEmail: [null, Validators.required],
      secundarioEmail: [null],
      phone: [null],
      cellPhone: [null, Validators.required],
      
    });
  }
}