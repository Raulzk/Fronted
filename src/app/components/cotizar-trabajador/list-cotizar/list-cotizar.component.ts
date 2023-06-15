import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cotizar } from 'src/app/model/cotizar';
import { CotizarService } from 'src/app/service/cotizar.service';
import { CotizarDialogoComponent } from './cotizar-dialogo/cotizar-dialogo.component';

@Component({
  selector: 'app-list-cotizar',
  templateUrl: './list-cotizar.component.html',
  styleUrls: ['./list-cotizar.component.css']
})
export class ListCotizarComponent implements OnInit {
  lista: Cotizar[] = []
  dataSource: MatTableDataSource<Cotizar> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'direccion', 'discripcion', 'imagen', 'fechaServicio', 'trabajador', 'acciones1', 'acciones2']
  constructor(private aS: CotizarService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(CotizarDialogoComponent);
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
