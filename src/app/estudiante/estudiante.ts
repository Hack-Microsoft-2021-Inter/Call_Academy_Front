import { Universidad } from "../universidad/universidad";

export class Estudiante {
  id: number;
  nombre: string;
  correo: string;
  contrasena: string;
  universidad: Universidad;

  constructor (
    id: number,
    nombre: string,
    correo: string,
    contrasena: string,
    universidad: Universidad
  ) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
    this.universidad = universidad;
  }
}
