/**
 * Interface con los parámetros que tiene la Api de Clientes
 */

//  export class Clientes {
//     constructor(
//       idCliente: number,
//       primerNombre: string,
//       segundoNombre: null | string,
//       primerApellido: string,
//       segundoApellido: string,
//       idTipoIdent: number,
//       numeroIdentificacion: string,      
//       email: string,
//       //emailsecundario: string,
//       telefonoCelular: number,
//       telefonoFijo: number,
//       direccion: string,
//     ){}
//   }

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

