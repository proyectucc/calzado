/**

 * Modelo de configuracion para botones de dialog

 */

export interface ButtonConfig {
  /**

   * Nombre del boton en el dialog

   */

  name?: string;

  /**

   * Habilita el boton en el dialog

   */

  isEnable?: boolean;
}

/**

 * Modelo de configuracion para iconos de dialog

 */

export interface IconConfig {
  /**

   * Define el tipo de icon en el dialog

   */

  type?: IconsType;

  /**

   * Habilita el icon en el dialog

   */

  isEnable: boolean;
}

/**

  * Tipos de iconos dialog

  */

export type IconsType = 'done' | 'secondary';
