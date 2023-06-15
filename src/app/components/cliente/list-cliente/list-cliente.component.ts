import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  lista: Cliente[] = []
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();
  idMayor: number = 0;
  displayedColumns: string[] = ['codigo', 'nombre', 'dni', 'correo', 'sexo', 'direccion', 'telefono', 'fechaNacimiento', 'fechaRegistro', 'acciones1', 'acciones2'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private aS: ClienteService, private dialog: MatDialog) {

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
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ClienteDialogComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
