import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalParameters } from '../models/modal.model';

@Component({
  selector: 'app-modal-creacion',
  templateUrl: './modal-creacion.component.html',
  styleUrls: ['./modal-creacion.component.scss'],
})
export class ModalCreacionComponent implements OnInit {
  /**
   * Receptor configuraciones para el componente form-dialog
   */
  @Input()
  public modalParameters!: ModalParameters;

  /**
   * Div dialog
   */
  @ViewChild('option')
  public option!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.modalParameters?.centerButton.isEnable);
  }

  /**
   * Accion de abrir el dialogo
   */

  public onShowDialog() {
    this.option.nativeElement.classList.add('hidden');
  }

  /**
   * Accion de cerrar el dialogo
   */

  public onCloseDialog() {
    this.option.nativeElement.classList.remove('hidden');
    this.router.navigate(['home']);
  }
  /**
   * Accion de cerrar el dialogo
   */
  public onCloseDialogLogin() {
    this.option.nativeElement.classList.remove('hidden');
    this.router.navigate(['login']);
  }
}
