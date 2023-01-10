import { Pipe, PipeTransform } from '@angular/core';

import { Heroes } from '../interfaces/interfaces';


@Pipe({
  name: 'rutasHeroes',

})
export class RutasHeroesPipe implements PipeTransform {

  transform(objeto: Heroes): string {


    return this.mostrarRuta(objeto);
  }


  mostrarRuta(objeto: Heroes) {

    if (objeto.id && !objeto.alt_img) {
      return "assets/heroes/" + objeto.id + ".jpeg"
    } else if (objeto.alt_img) {
      if (objeto.alt_img.length <= 5) {
        return "assets/no-image.png"
      } else {

        return objeto.alt_img
      }

    }
    else {
      return "assets/no-image.png"
    }
  }



}
