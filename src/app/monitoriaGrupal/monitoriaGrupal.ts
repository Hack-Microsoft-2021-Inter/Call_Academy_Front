import { Monitoria } from "../monitoria/monitoria";

export class MonitoriaGrupal extends Monitoria {
  descripcion: string;

  constructor(
    id: number,
    fecha: Date,
    duracionHora: number,
    duracionMinuto: number,
    esVirtual: boolean,
    lugar: string,
    precio: number,
    descripcion: string
  ) {
    super(id, fecha, duracionHora, duracionMinuto, esVirtual, lugar, precio);
    this.descripcion = descripcion;
  }
}
