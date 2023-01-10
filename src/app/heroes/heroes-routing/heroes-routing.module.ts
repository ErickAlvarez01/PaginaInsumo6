import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from '../pages/listado/listado.component';




import { HomeComponent } from '../pages/home/home.component';
import { TarjetasComponent } from '../components/tarjetas/tarjetas.component';
import { CarritoComponent } from '../components/carrito/carrito.component';
import { FacturaComponent } from '../components/factura/factura.component';
import { PantallaFinalComponent } from '../components/pantalla-final/pantalla-final.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // especifica que el home tendrà  la navegación hijas
    children: [
      {
        path: 'listado',
        component: TarjetasComponent
      },

      {
        path:'carrito',
        component: CarritoComponent
      },

      {
        path:'factura',
        component:FacturaComponent
      }, 
      {
        path:'pantallaFinal',
        component:PantallaFinalComponent
      }, 
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
