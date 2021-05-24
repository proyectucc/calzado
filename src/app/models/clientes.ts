/**
 * Interface con los parámetros que tiene la Api de Clientes
 */

export interface Clientes {
  idCliente: number,
  primerNombre: string,
  segundoNombre?: string,
  primerApellido: string,
  segundoApellido: string,
  idTipoIdent: number,
  numeroIdentificacion: string,
  email: string,
  //emailsecundario: string,
  telefonoCelular: number,
  telefonoFijo?: number,
  direccion?: string,
}

