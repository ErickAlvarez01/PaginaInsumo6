import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AutorizacionGuard } from './auth/guards/autorizacion.guard';



const routes: Routes = [ //creamos las rutas padre de la app
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) // carga los hijos de auth
  },

  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [AutorizacionGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },

  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // asignamos a este modulo el routermodule y le pasamos rutas padre
  ],
  exports: [
    RouterModule //exportamos dichas rutas
  ]
})
export class AppRoutingModule { }
