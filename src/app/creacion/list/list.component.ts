import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  nameOne: string;
  lastnameOne: string;
  lastnameTwo: string;
  dateHiring: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nameOne: 'Carlos', lastnameOne: 'Mendez', lastnameTwo: 'Fernandez', dateHiring: '1-04-2021'},
  {position: 2, nameOne: 'Maria', lastnameOne: 'Acuña', lastnameTwo: 'Acuña', dateHiring: '1-04-2021'},
  {position: 3, nameOne: 'Fernando', lastnameOne: 'Fernandez', lastnameTwo: 'Fernandez', dateHiring: '1-04-2021'},
  {position: 4, nameOne: 'Mario', lastnameOne: 'Lima', lastnameTwo: 'Lima', dateHiring: '1-04-2021'},
  {position: 5, nameOne: 'Alejandra', lastnameOne: 'Velandia', lastnameTwo: 'Velandia', dateHiring: '1-04-2021'},
  {position: 6, nameOne: 'Sneider', lastnameOne: 'Muñoz', lastnameTwo: 'Muñoz', dateHiring: '1-04-2021'},
  {position: 7, nameOne: 'Alexander', lastnameOne: 'Ramirez', lastnameTwo: 'Ramirez', dateHiring: '1-04-2021'},
  {position: 8, nameOne: 'Sophia', lastnameOne: 'Pulido', lastnameTwo: 'Pulido', dateHiring: '1-04-2021'},
  {position: 9, nameOne: 'Natalia', lastnameOne: 'Guerra', lastnameTwo: 'Guerra', dateHiring: '1-04-2021'},
  {position: 10, nameOne: 'Andrea', lastnameOne: 'Lopez', lastnameTwo: 'Lopez', dateHiring: '1-04-2021'},
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  displayedColumns: string[] = ['position', 'nameOne', 'lastnameOne', 'lastnameTwo', 'dateHiring'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  /**
   * Método
   */
  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
