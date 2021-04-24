/**
 * Interface con los parámetros que tiene la Api de Empleados
 */
export interface Empleados {

  /**
   * Id del empleado
   */
  IdEmpleado?: number;
  /**
   * Primero nombre del empleado
   */
  PrimerNombre?: string;
  /**
   * Segundo nombre del empleado
   */
  SegundoNombre?: string;
  /**
   * Primer apellido del empleado
   */
  PrimerApellido?: string;
  /**
   * Segundo apellido del empleado
   */
  SegundoApellido?: string;
  /**
   * Tipo de documento del empleado
   */
  IdTipoIdent?: number;
  /**
   * Número del empleado
   */
  NumeroIdentificacion?: string;
  /**
   * Fecha de nacimiento del empleado
   */
  FechaNacimiento?: Date;
  /**
   * Fecha de contratación del empleado
   */
  FechaContratacion?: Date;
  /**
   * Fecha fin del contrato del empleado
   */
  FechaTerminacion?: Date;
  /**
   * Email principal del empleado
   */
  EmailPrincipal?: string;
  /**
   * Téléfono fijo del empleado
   */
  TelefonoFijo?: number;
  /**
   * Teléfono celular del empleado
   */
  TelefonoCelular?: number;
}
