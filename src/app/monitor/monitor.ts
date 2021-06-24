import { Estudiante } from "../estudiante/estudiante";
import { Universidad } from "../universidad/universidad";

export class Monitor extends Estudiante {
  calificacion: number;

  constructor(
    id: number,
    nombre: string,
    correo: string,
    contrasena: string,
    calificacion: number,
    universidad: Universidad
  ) {
    super(id, nombre, correo, contrasena, universidad);
    this.calificacion = calificacion;
  }
}
