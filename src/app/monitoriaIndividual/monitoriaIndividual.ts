import { Monitoria } from "../monitoria/monitoria";

export class MonitoriaIndividual extends Monitoria {

  constructor(
    id: number,
    fecha: Date,
    duracionHora: number,
    duracionMinuto: number,
    esVirtual: boolean,
    lugar: string,
    precio: number,
  ) {
    super(id, fecha, duracionHora, duracionMinuto, esVirtual, lugar, precio);
  }
}
