/**
 * Interface con los parámetros que tiene la Api de Clientes
 */

 export interface productos {
  idProducto:number,
  idCategoria: number,
  idMarca: number,
  nombreProducto: string,
  costoCompra: number,
  costoVenta: number,
  cantida: number,
  descripcion?: string,
 }
