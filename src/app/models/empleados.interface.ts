/**
 * Información que contiene los empleados
 */
export interface DatosEmpleado {
  idEmpleado: number;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido: string;
  idTipoIdent: number;
  numeroIdentificacion: number;
  fechaNacimiento: Date;
  fechaContratacion: Date;
  fechaTerminacion: Date;
  emailPrincipal: string;
  telefonoFijo: number;
  telefonoCelular: number;
  rol: string;
}
