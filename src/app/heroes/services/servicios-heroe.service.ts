import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Heroes } from '../interfaces/interfaces';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiciosHeroeService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.desarrollo;

  // getClientes(): Observable<Heroes[]> {
  //   return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  // }

  getClientes(): Observable<Heroes[]> {
    return of(this.dataClientes);
  }

  getInfoCliente(parametro: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${parametro}`);
  }

  getQueryHero(parametro: string): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes?q=${parametro}&_limit=3`);
  }


  insertData(heroe: Heroes): Observable<Heroes> {
    return this.http.post<Heroes>(`${this.baseUrl}/heroes/`, heroe);
  }

  actualizaData(heroe: Heroes): Observable<Heroes> {
    return this.http.put<Heroes>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  eliminarData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }




  private dataClientes: Heroes[] =

    [
      {
        id: "AG-Pro",
        superhero: "AG-Pro",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "279.99",
        characters: "Botas de fútbol para césped artificial",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Mercurial",
        superhero: "Mercurial",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "129.99",
        characters: "Botas de fútbol para terreno firme personalizadas",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Vaporfly",
        superhero: "Vaporfly",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "249.99",
        characters: "Zapatillas de competición para asfalto - Hombre",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Streakfly",
        superhero: "Streakfly",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "149.99",
        characters: "Zapatillas de competición para carretera",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Zoom",
        superhero: "Zoom",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "149.99",
        characters: "Zapatillas con clavos de competición",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Pegasus",
        superhero: "Pegasus",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "95.97",
        characters: "Zapatillas de running para asfalto - Hombre",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Elite KM FG",
        superhero: "Elite KM FG",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "289.99",
        characters: "Botas de fútbol para terreno firme",
        cantidad: 0,
        actualizar: true
      }
      
    ]


}
