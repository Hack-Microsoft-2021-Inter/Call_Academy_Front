export class Monitoria {
    id: number;
    fecha: Date;
    duracionHora: number;
    duracionMinuto: number;
    esVirtual: boolean;
    lugar: string;
    precio: number;

    constructor(
        id: number,
        fecha: Date,
        duracionHora: number,
        duracionMinuto: number,
        esVirtual: boolean,
        lugar: string,
        precio: number
    ) {
      this.id = id;
      this.fecha = fecha;
      this.duracionHora = duracionHora;
      this.duracionMinuto = duracionMinuto;
      this.esVirtual = esVirtual;
      this.lugar = lugar;
      this.precio = precio;
    }
  }
