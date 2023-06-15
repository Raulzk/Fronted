import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CotizarService } from 'src/app/service/cotizar.service';

@Component({
  selector: 'app-cotizar-dialogo',
  templateUrl: './cotizar-dialogo.component.html',
  styleUrls: ['./cotizar-dialogo.component.css']
})
export class CotizarDialogoComponent implements OnInit {
  constructor(private aS: CotizarService,
    private dialogRef: MatDialogRef<CotizarDialogoComponent>) { }
  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.aS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
