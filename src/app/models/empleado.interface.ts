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
}
