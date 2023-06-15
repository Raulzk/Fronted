import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Cotizar } from 'src/app/model/cotizar';
import { Trabajador } from 'src/app/model/trabajador';
import { CotizarService } from 'src/app/service/cotizar.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-add-cotizar',
  templateUrl: './add-cotizar.component.html',
  styleUrls: ['./add-cotizar.component.css']
})
export class AddCotizarComponent {
  form: FormGroup = new FormGroup({});
  cotizar: Cotizar = new Cotizar();
  lista: Trabajador[] = [];
  idTrabajadorSeleccionado: number = 0;
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;

  constructor(private aS: CotizarService, private router: Router, private route: ActivatedRoute, private tS: TrabajadorService) {
  }

  ngOnInit(): void {
    this.tS.list().subscribe(data => { this.lista = data });
    this.form = new FormGroup({
      id: new FormControl(),
      direccion: new FormControl(),
      discripcion: new FormControl(),
      imagen: new FormControl(),
      fechaServicio: new FormControl(),
      trabajador: new FormControl()
    });
  }
  aceptar(): void {
    this.cotizar.id = this.form.value['id'];
    this.cotizar.direccion = this.form.value['direccion'];
    this.cotizar.discripcion = this.form.value['discripcion'];
    this.cotizar.imagen = this.form.value['imagen'];
    this.cotizar.fechaServicio = this.form.value['fechaServicio'];
    this.cotizar.trabajador.nombreCompleto = this.form.value['trabajador.nombreCompleto']
    if (this.idTrabajadorSeleccionado > 0) {
      let a = new Trabajador();
      a.id = this.idTrabajadorSeleccionado;
      this.cotizar.trabajador = a;
      this.aS.insert(this.cotizar).subscribe(() => {
        this.aS.list().subscribe(data => {
          this.aS.setList(data);
        })
      })

      this.router.navigate(['msjConfirmacion']);

    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          direccion: new FormControl(data.direccion),
          discripcion: new FormControl(data.discripcion),
          imagen: new FormControl(data.imagen),
          fechaServicio: new FormControl(data.fechaServicio)
        })
      })
    }
  }
}
