import { Component, OnInit } from '@angular/core';
import { Factura, Heroes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  datos?: Factura;
  data: Heroes[] = []
  nombreUsuario:string = "";
  constructor() { }



  ngOnInit(): void {
    this.cargarDatosMemoria();
    this.detalleProductos();
  }


  cargarDatosMemoria() {

    this.datos = JSON.parse(localStorage.getItem('datosFactura')!) as Factura;
    this.nombreUsuario=JSON.parse(localStorage.getItem('login') as string);

  }


  limpiarLocalStorage() {

    localStorage.clear();
    document.location.href = "/heroes/pantallaFinal";
  }

  detalleProductos() {

    this.data = JSON.parse(localStorage.getItem('productosGuardados')!) as Heroes[];

    console.log(this.data);
  }
}
