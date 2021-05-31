
/**
 * Contiene la información de los usuarios asociados a un empleado
 */
export interface Usuario {
  idUsuario: number;
  nombreUsuario: string;
  contraseña: string;
  fechaCreacion: Date;
  fechaTerminacion: string;
  idEmpleado: number;
  rol: string;
}
