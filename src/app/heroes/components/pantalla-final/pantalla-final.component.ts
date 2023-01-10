import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-final',
  templateUrl: './pantalla-final.component.html',
  styleUrls: ['./pantalla-final.component.css']
})
export class PantallaFinalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.temporizador();
  }


  temporizador(){
    setTimeout(function(){
      location.href=('/heroes/listado')
  }, 2000);
  
  }
}
