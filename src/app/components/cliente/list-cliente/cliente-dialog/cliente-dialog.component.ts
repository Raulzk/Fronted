import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-dialog',
  templateUrl: './cliente-dialog.component.html',
  styleUrls: ['./cliente-dialog.component.css']
})
export class ClienteDialogComponent implements OnInit {

  constructor(private aS: ClienteService,
    private dialogRef: MatDialogRef<ClienteDialogComponent>) {

  }
  ngOnInit(): void {

  }
  confirmar(estado: boolean) {
    this.aS.setConfirmDelete(estado);
    this.dialogRef.close();
  }

}
