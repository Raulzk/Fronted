import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-lista-trabajadores',
  templateUrl: './lista-trabajadores.component.html',
  styleUrls: ['./lista-trabajadores.component.css']
})
export class ListaTrabajadoresComponent implements OnInit {

  trabajadores: Trabajador[] = []; // Aquí se deben agregar los datos de los trabajadores
  terminoBusqueda: string = '';
  constructor(private ts: TrabajadorService) {

  }

  ngOnInit() {
    this.ts.list().subscribe(
      (trabajadores: Trabajador[]) => {
        this.trabajadores = trabajadores;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  Filter() {
    if (this.terminoBusqueda) {
      this.trabajadores = this.trabajadores.filter(trabajador =>
        trabajador.direccion.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
      );
    } else {
      // Si no hay término de búsqueda, muestra todos los trabajadores sin filtrar
      this.ts.list().subscribe(
        (trabajadores: Trabajador[]) => {
          this.trabajadores = trabajadores;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
