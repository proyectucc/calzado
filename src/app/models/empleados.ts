/**
 * Interface con los parámetros que tiene la Api de Empleados
 */

export class Empleados {
  constructor(
    idEmpleado: number,
    primerNombre: string,
    segundoNombre: null | string,
    primerApellido: string,
    segundoApellido: string,
    tipoIdent: string,
    numeroIdentificacion: string,
    telefonoCelular: number,
    telefonoFijo: number,
    emailPrincipal: string,
    fechaContratacion: Date,
    fechaTerminacion: Date,
    fechaNacimiento: Date,
    role: string
  ){}
}

