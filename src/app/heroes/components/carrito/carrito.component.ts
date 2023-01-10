import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Heroes, Factura } from '../../interfaces/interfaces';
import { DatePipe, JsonPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EmergenteComponent } from '../emergente/emergente.component';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  @ViewChild('cantidad') usernameElement?: ElementRef;
  constructor(private dialog: MatDialog, usernameElement: ElementRef) {
    this.usernameElement = usernameElement;
  }
  intValor: number = 0;
  data: Heroes[] = [];
  dataAuxiliar: Heroes[] = [];
  pipe = new DatePipe('en-US');
  habilitarDeshabilitar: boolean = true;

  ngOnInit(): void {

    this.cargarDatosMemoria();
  }


  presentarPantalla:boolean=true;
  cargarDatosMemoria() {

    this.data = JSON.parse(localStorage.getItem('productosGuardados')!) as Heroes[];

    if(this.data==null){
     this.presentarPantalla=false;
  
    }else{
      this.presentarPantalla=true;
    }
  }


  eliminar(producto: Heroes) {

    const respuesta = this.dialog.open(EmergenteComponent, {
      data: producto
    });

    respuesta.afterClosed().subscribe((res => {

      if (res) {
        this.modo=false;
        console.log("hago click");
        //console.log(this.data)
        this.data = this.data.filter(data => data.id != producto.id);
        localStorage.setItem('productosGuardados', JSON.stringify(this.data));
      }

    }))




  }


  modificar(producto: Heroes, cantidad: any) {
    this.modo=false;
    if (producto.actualizar) {
      this.data.forEach(element => {
        if (element.id == producto.id) {
          element.actualizar = false;

        }
      });
    } else {

      this.data.forEach(element => {
        if (element.id == producto.id) {
          element.actualizar = true;
          element.cantidad = cantidad;

        }
      });
      localStorage.setItem('productosGuardados', JSON.stringify(this.data));
    }


  }


  objetoFactura: Factura = {
    nombreUsuario: "Pablo Fernando",
    fecha: "",
    subtotal: 0,
    total: 0,
    iva: 0
  }


  calcularIva(subtotal: number): number {
    return (12 * subtotal) / 100;
  }
  modo: boolean = false; //cuando esta actualizando false cuando esta guardando
  facturar() {

    this.modo=true;
    let subtotal = 0;
    this.data.forEach(producto => {
      subtotal = subtotal + Number(producto.first_appearance) * producto.cantidad!;
    });

    this.objetoFactura.fecha = this.pipe.transform(Date.now(), 'dd/MM/yyyy')!.toString();
    this.objetoFactura.subtotal = subtotal;
    this.objetoFactura.iva = this.calcularIva(subtotal);
    this.objetoFactura.total = this.calcularIva(subtotal) + subtotal;


  }



  salvarFactura(): any {
    this.facturar();
    localStorage.setItem('datosFactura', JSON.stringify(this.objetoFactura));

  }

  regresar(){
    location.href=('/heroes/listado')
  }
}
