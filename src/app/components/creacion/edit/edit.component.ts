import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

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
       dateBirthday: [null, Validators.required],
       dateHiring: [null, Validators.required],
       dateEndHiring: [null],
       principalEmail: [null, Validators.required],
       phone: [null],
       cellPhone: [null, Validators.required],
       rol: [null, Validators.required],
     });
   }

}
