import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productos } from 'src/app/models/productos';
import { productoService } from 'src/app/services/productos/producto.service';
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
 /**
   * Lista de productos
   */
  public prod: productos;
  /**

  /**
   * Crea una nueva instancia de la clase
   */
   constructor(
    private productoService: productoService,
    private router: Router,
  ) {}
  public user: productos[];
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  longitud: number;

  /**
   * Se ejecuta cuando se inicializa el componente
   */
  public ngOnInit(): void {
    this.productoService.cargarproducto().subscribe((resp) => {
      this.prod = resp;
      console.log('DATOS', resp);
    });
  }
}