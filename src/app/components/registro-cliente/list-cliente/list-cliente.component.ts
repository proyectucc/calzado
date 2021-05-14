import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { TipoDocumento } from 'src/app/models/tipo-identificacion.iterface';
import { ClienteService } from 'src/app/services/clientes/cliente.service';
import { IdentificacionService } from 'src/app/services/identificacion/identificacion.service';
@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit {
 /**
   * Lista de clientes
   */
  public cli: Clientes = [];
  /**
   * Objeto que contiene los campos de los clientes
   */
   typeDocuments: TipoDocumento;
  /**
   * Crea una nueva instancia de la clase
   */
   constructor(
    private clienteService: ClienteService,
    private router: Router,
    private document: IdentificacionService
  ) {}
  public user: Clientes[];
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  longitud: number;

  /**
   * Se ejecuta cuando se inicializa el componente
   */
  public ngOnInit(): void {
    this.clienteService.cargarClientes().subscribe((resp) => {
      this.cli = resp;
      console.log('DATOS', resp);
    });
  }

  

}
