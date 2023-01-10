import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing/heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { RutasHeroesPipe } from './pipes/rutas-heroes.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { FormsModule } from '@angular/forms';
import { EmergenteComponent } from './components/emergente/emergente.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PantallaFinalComponent } from './components/pantalla-final/pantalla-final.component';




@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    RutasHeroesPipe,
    TarjetasComponent,
    EmergenteComponent,
    CarritoComponent,
    FacturaComponent,
    PantallaFinalComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule

  ]
})
export class HeroesModule { }
