import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.scss']
})
export class CreacionProductosComponent {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      categoria: [null, Validators.required],
      marca: [null, Validators.required],
      cost_comp: [null, Validators.required],
      cost_vent: [null, Validators.required],
      cantidad: [null, Validators.required],
      descripcion: [null],
    });
  }
}
