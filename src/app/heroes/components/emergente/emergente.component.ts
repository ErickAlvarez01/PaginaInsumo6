import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-emergente',
  templateUrl: './emergente.component.html',
  styleUrls: ['./emergente.component.css']
})
export class EmergenteComponent implements OnInit {

  constructor(private referencia: MatDialogRef<EmergenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroes) { }

  ngOnInit(): void {
  }

  cancelar() {

    this.referencia.close()
  }
  borrar() {

    this.referencia.close(true)
  }
}
