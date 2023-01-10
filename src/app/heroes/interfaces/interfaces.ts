export interface Heroes {
  id: string;
  superhero: string;
  publisher: Tienda | any;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
  cantidad?: number;
  actualizar: boolean;
}

export enum Tienda {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}


export interface Factura {

  nombreUsuario: string,
  fecha: string,
  subtotal: number,
  total: number,
  iva: number
}
