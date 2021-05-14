import { ButtonConfig, IconConfig } from './buttons.model';

/**

 * Modelo de parametros para Form-dialog

 */

export interface ModalParameters {

  /**
   * Define el icono en los Form-dialog
   */

  icon?: IconConfig;

  /**
   * Define el titulo en los Form-dialog
   */

  title?: string;

  /**
   * Define el cuerpo en los Form-dialog
   */

  body?: string;


  /**
   * Recibe el valor del contenido del select dialog
   */

  centerButton: ButtonConfig;
}
