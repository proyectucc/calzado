<<<<<<< HEAD
export interface OneEmpleado {
  idEmpleado: number;
  primerNombre: string;
  segundoNombre: null | string;
  primerApellido: string;
  segundoApellido: string;
  tipoIdent: string;
  numeroIdentificacion: string;
  telefonoCelular: number;
  telefonoFijo: number;
  emailPrincipal: string;
  fechaContratacion: Date;
  fechaTerminacion: Date;
  fechaNacimiento: Date;
=======

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
  Rol: string;
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
}
