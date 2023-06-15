import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-add-edit-cliente',
  templateUrl: './add-edit-cliente.component.html',
  styleUrls: ['./add-edit-cliente.component.css']
})
export class AddEditClienteComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  accion = 'Crear';
  hide = true;
  constructor(private aS: ClienteService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      dni: new FormControl(),
      correo: new FormControl(),
      sexo: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      fechaNacimiento: new FormControl(),
      fechaRegistro: new FormControl(),




    });
  }
  aceptar(): void {
    this.cliente.id = this.form.value['id'];
    this.cliente.nombre = this.form.value['nombre'];
    this.cliente.telefono = this.form.value['telefono'];
    this.cliente.correo = this.form.value['correo'];
    this.cliente.sexo = this.form.value['sexo'];
    this.cliente.dni = this.form.value['dni'];
    this.cliente.direccion = this.form.value['direccion'];
    this.cliente.fechaNacimiento = this.form.value['fechaNacimiento'];
    this.cliente.fechaRegistro = this.form.value['fechaRegistro'];

    if (this.form.value['nombre'].length > 0 &&
      this.form.value['dni'].length > 0) {

      if (this.edicion) {
        this.aS.update(this.cliente).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.cliente).subscribe((data) => {
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
          nombre: new FormControl(data.nombre),
          dni: new FormControl(data.dni),
          correo: new FormControl(data.correo),
          sexo: new FormControl(data.sexo),
          direccion: new FormControl(data.direccion),
          telefono: new FormControl(data.telefono),
          fechaNacimiento: new FormControl(data.fechaNacimiento),
          fechaRegistro: new FormControl(data.fechaRegistro),

        })
      })
    }
  }



}
