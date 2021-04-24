import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Empleados } from 'src/app/models/empleados';
import { UsuarioService } from 'src/app/services/usuario.service';

export interface PeriodicElement {
  position: number;
  nameOne: string;
  lastnameOne: string;
  lastnameTwo: string;
  dateHiring: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    nameOne: 'Carlos',
    lastnameOne: 'Mendez',
    lastnameTwo: 'Fernandez',
    dateHiring: '1-04-2021',
  },
  {
    position: 2,
    nameOne: 'Maria',
    lastnameOne: 'Acuña',
    lastnameTwo: 'Acuña',
    dateHiring: '1-04-2021',
  },
  {
    position: 3,
    nameOne: 'Fernando',
    lastnameOne: 'Fernandez',
    lastnameTwo: 'Fernandez',
    dateHiring: '1-04-2021',
  },
  {
    position: 4,
    nameOne: 'Mario',
    lastnameOne: 'Lima',
    lastnameTwo: 'Lima',
    dateHiring: '1-04-2021',
  },
  {
    position: 5,
    nameOne: 'Alejandra',
    lastnameOne: 'Velandia',
    lastnameTwo: 'Velandia',
    dateHiring: '1-04-2021',
  },
  {
    position: 6,
    nameOne: 'Sneider',
    lastnameOne: 'Muñoz',
    lastnameTwo: 'Muñoz',
    dateHiring: '1-04-2021',
  },
  {
    position: 7,
    nameOne: 'Alexander',
    lastnameOne: 'Ramirez',
    lastnameTwo: 'Ramirez',
    dateHiring: '1-04-2021',
  },
  {
    position: 8,
    nameOne: 'Sophia',
    lastnameOne: 'Pulido',
    lastnameTwo: 'Pulido',
    dateHiring: '1-04-2021',
  },
  {
    position: 9,
    nameOne: 'Natalia',
    lastnameOne: 'Guerra',
    lastnameTwo: 'Guerra',
    dateHiring: '1-04-2021',
  },
  {
    position: 10,
    nameOne: 'Andrea',
    lastnameOne: 'Lopez',
    lastnameTwo: 'Lopez',
    dateHiring: '1-04-2021',
  },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public user: Empleados[];
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  longitud: number;

  /**
   * Se ejecuta cuando se inicializa el componente
   */
  public ngOnInit(): void {
    this.obtener();
  }

  /**
   * Crea una nueva instancia de la clase
   */
  constructor(private usuarioService: UsuarioService) {}

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  displayedColumns: string[] = [
    'position',
    'nameOne',
    'lastnameOne',
    'lastnameTwo',
    'dateHiring',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  /**
   * Método
   */
  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: typedef
  obtener() {
    // tslint:disable-next-line: deprecation
    this.usuarioService.obtener().subscribe(
      (Response) => {
        this.user = Response;
        this.longitud = this.user.length;
        console.log(this.user);
        // tslint:disable-next-line: deprecation
        // this.usuarioService.ingresar(this.user).subscribe(
        //   // tslint:disable-next-line: no-shadowed-variable
        //   (Response) => {
        //     console.log('ok', Response);
        //   },
        //   (Error) => {
        //     console.log('error');
        //   }
        // );
      },
      (Error) => {
        console.log('error');
      }
    );
  }
}
