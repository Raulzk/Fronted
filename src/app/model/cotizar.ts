import { Trabajador } from "./trabajador"

export class Cotizar {
    id?: number = 0
    direccion: string = ''
    imagen: string = ''
    discripcion: string = ''
    fechaServicio: Date = new Date()
    trabajador: Trabajador = new Trabajador()
}