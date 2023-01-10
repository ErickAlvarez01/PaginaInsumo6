import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/interfaces';
import { ServiciosHeroeService } from '../../services/servicios-heroe.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  constructor(private servicios: ServiciosHeroeService) { }


  heroe: Heroes[] = [];

  carrito: Heroes[] = [];



  cargarHeroesInterfaz() {
    return this.servicios.getClientes().subscribe(res => {
      this.heroe = res
    });
  }

  ngOnInit(): void {
    this.cargarHeroesInterfaz();
  }

  agregarCarro(productoPorGuardar: Heroes) {

    let agregarOnoAgregar = false;

    if (this.carrito.length == 0) {
      productoPorGuardar.cantidad!++;
      this.carrito.push(productoPorGuardar);
    } else {
      this.carrito.forEach(productoYaGuardado => {

        if (productoYaGuardado.id == productoPorGuardar.id) {
          productoYaGuardado.cantidad!++;
          agregarOnoAgregar = true;
        }
      });

      if (agregarOnoAgregar == false) {
        productoPorGuardar.cantidad!++;
        this.carrito.push(productoPorGuardar);
      }
    }


    //Agregar en estan linea el setlocalstorage pasandole el this.carrito
    localStorage.setItem('productosGuardados', JSON.stringify(this.carrito));
    console.log("Se va a agregar: ", this.carrito)
  }



}
