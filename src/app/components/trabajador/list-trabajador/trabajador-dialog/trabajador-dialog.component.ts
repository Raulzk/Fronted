import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-trabajador-dialog',
  templateUrl: './trabajador-dialog.component.html',
  styleUrls: ['./trabajador-dialog.component.css']
})
export class TrabajadorDialogComponent implements OnInit {
  constructor(private aS: TrabajadorService,
    private dialogRef: MatDialogRef<TrabajadorDialogComponent>) {

  }

  ngOnInit(): void {

  }
  confirmar(estado: boolean) {
    this.aS.setConfirmDelete(estado);
    this.dialogRef.close();
  }

}
