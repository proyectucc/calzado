/**
 * Interface con los parámetros que tiene la Api de Clientes
 */

 export class Clientes {
    constructor(
      idCliente: number,
      primerNombre: string,
      segundoNombre: null | string,
      primerApellido: string,
      segundoApellido: string,
      IdTipoIdent: number,
      numeroIdentificacion: string,      
      email: string,
      //emailsecundario: string,
      telefonoCelular: number,
      telefonoFijo: number,
      direccion: string,
    ){}
  }

// export interface Clientes {
//   IdCliente: number,
//   PrimerNombre: string,
//   SegundoNombre?: string,
//   PrimerApellido: string,
//   SegundoApellido: string,
//   IdTipoIdent: number,
//   NumeroIdentificacion: string,
//   Email: string,
//   emailsecundario: string,
//   TelefonoCelular: number,
//   TelefonoFijo?: number,
//   Direccion?: string,
// }

