import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Trabajador } from 'src/app/model/trabajador';
import * as moment from 'moment'
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-trabajador',
  templateUrl: './add-edit-trabajador.component.html',
  styleUrls: ['./add-edit-trabajador.component.css']
})
export class AddEditTrabajadorComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  trabajador: Trabajador = new Trabajador();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  accion = 'Crear';
  constructor(private aS: TrabajadorService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      nombreCompleto: new FormControl(),
      telefono: new FormControl(),
      correo: new FormControl(),
      sexo: new FormControl(),
      dni: new FormControl(),
      direccion: new FormControl(),
      servicio: new FormControl(),
      fechaNacimiento: new FormControl(),
      fechaRegistro: new FormControl(),

    });
  }
  aceptar(): void {
    this.trabajador.id = this.form.value['id'];
    this.trabajador.nombreCompleto = this.form.value['nombreCompleto'];
    this.trabajador.telefono = this.form.value['telefono'];
    this.trabajador.correo = this.form.value['correo'];
    this.trabajador.sexo = this.form.value['sexo'];
    this.trabajador.dni = this.form.value['dni'];
    this.trabajador.direccion = this.form.value['direccion'];
    this.trabajador.servicio = this.form.value['servicio'];
    this.trabajador.fechaNacimiento = this.form.value['fechaNacimiento'];
    this.trabajador.fechaIngreso = this.form.value['fechaRegistro'];
    if (this.form.value['nombreCompleto'] != null &&
      this.form.value['dni'] != null) {

      if (this.edicion) {
        this.aS.update(this.trabajador).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.trabajador).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['succesful']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }


  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombreCompleto: new FormControl(data.nombreCompleto),
          telefono: new FormControl(data.telefono),
          correo: new FormControl(data.correo),
          sexo: new FormControl(data.sexo),
          dni: new FormControl(data.dni),
          direccion: new FormControl(data.direccion),
          servicio: new FormControl(data.servicio),
          fechaNacimiento: new FormControl(data.fechaNacimiento),
          fechaIngreso: new FormControl(data.fechaIngreso),
        })
      })
    }
  }

}
