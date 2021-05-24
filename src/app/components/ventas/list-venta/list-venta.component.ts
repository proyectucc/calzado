import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ventas } from 'src/app/models/Ventas';
import { VentaService } from 'src/app/services/ventas/venta.service';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.scss']
})
export class ListVentaComponent implements OnInit {

  /**
   * Lista de Ventas
   */
   public ven: Ventas;
   /**
    * Crea una nueva instancia de la clase
    */
    constructor(
     private ventaService: VentaService,
     private router: Router,

   ) {}
   public user: Ventas[];
   currentPage = 1;
   itemsPerPage = 10;
   pageSize: number;
   longitud: number;
 
   /**
    * Se ejecuta cuando se inicializa el componente
    */
   public ngOnInit(): void {    
     this.ventaService.cargarVentas().subscribe((resp) => {
       this.ven = resp;
       console.log('DATOS', resp);
     });
   }

}
