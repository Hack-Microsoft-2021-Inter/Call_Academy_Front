import { Materia } from "../materia/materia";
import { Monitoria } from "../monitoria/monitoria";
import { Universidad } from "../universidad/universidad";
import { Monitor } from "./monitor";

export class MonitorDetail extends Monitor {
  materias: Array<Materia>;
  monitorias: Array<Monitoria>;

  constructor(
    id: number,
    nombre: string,
    correo: string,
    contrasena: string,
    calificacion: number,
    universidad: Universidad
  ) {
    super(id, nombre, correo, contrasena, calificacion, universidad);
    this.materias = [];
    this.monitorias = [];
  }
}
