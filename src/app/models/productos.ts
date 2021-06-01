/**
 * Interface con los parámetros que tiene la Api de Productos
 */

export interface Productos {
  idProducto: number;
  idCategoria: number;
  idMarca: number;
  nombreProducto: string;
  costoCompra: number;
  costoVenta: number;
  cantidad: number;
  descripcion?: string;
}
