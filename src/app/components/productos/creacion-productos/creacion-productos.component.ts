<<<<<<< HEAD
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';


=======
import { Component, OnInit } from '@angular/core';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.scss']
})
<<<<<<< HEAD
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
=======
export class CreacionProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
}
