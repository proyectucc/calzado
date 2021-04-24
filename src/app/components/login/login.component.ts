import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /**
   * Permite la configuración de los campos del formulario
   */
   public formBuilder: FormBuilder;

   /**
    * Permite crear grupos de controles para un formulario
    */
   public frmGroup: FormGroup;

   /**
    * instancia de la clase
    */
   constructor(formBuilder: FormBuilder) {

     this.formBuilder = formBuilder;

     this.frmGroup = this.formBuilder.group({
       email: ['', Validators.required],
       pass: ['', Validators.required],
     });

   }

}
