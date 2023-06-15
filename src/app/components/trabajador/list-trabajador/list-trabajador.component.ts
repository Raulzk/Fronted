import { Component, OnInit, ViewChild } from '@angular/core';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TrabajadorDialogComponent } from './trabajador-dialog/trabajador-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-list-trabajador',
  templateUrl: './list-trabajador.component.html',
  styleUrls: ['./list-trabajador.component.css']
})
export class ListTrabajadorComponent implements OnInit {
  lista: Trabajador[] = [];
  idMayor: number = 0;
  dataSource: MatTableDataSource<Trabajador> = new MatTableDataSource();
  displayedColumns: string[] = ['codigo', 'nombreCompleto', 'telefono', 'correo', 'sexo', 'dni', 'direccion', 'servicio', 'fechaNacimiento', 'fechaIngreso', 'acciones1', 'acciones2'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private aS: TrabajadorService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  Filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
    // Lógica para aplicar el filtro en tu fuente de datos
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(TrabajadorDialogComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }

}
