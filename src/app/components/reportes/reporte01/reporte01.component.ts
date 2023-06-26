import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cotizarTrabajadorDTO } from 'src/app/model/CotizarTrabajadorDTO';
import { CotizarService } from 'src/app/service/cotizar.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit {
  bookCounts: cotizarTrabajadorDTO[] = [];
  dataSource: MatTableDataSource<cotizarTrabajadorDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['trabajador', 'cantidad']

  constructor(private bS: CotizarService) { }

  ngOnInit(): void {
    this.bS.getBookCountByAuthor().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getBookCountByAuthor(): void {
    this.bS.getBookCountByAuthor()
      .subscribe((data: cotizarTrabajadorDTO[]) => {
        this.bookCounts = data;
      });
  }

}
