
/**
 * Contiene la información del empleado
 */
export interface OneEmpleado{
  IdEmpleado: number;
  PrimerNombre: string;
  SegundoNombre?: string;
  PrimerApellido: string;
  SegundoApellido?: string;
  IdTipoIdent: string;
  NumeroIdentificacion: string;
  FechaNacimiento: Date;
  FechaContratacion: Date;
  FechaTerminacion: Date;
  EmailPrincipal: string;
  TelefonoFijo?: number;
  TelefonoCelular: number;
  IdRol: string;
}
