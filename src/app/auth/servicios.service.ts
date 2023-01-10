import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Heroes } from '../heroes/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuarios } from './interfaces/interfazLogin';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.desarrollo;
  private _auth: Usuarios | undefined;


  get auth(): Usuarios {
    return { ...this._auth! };
  }



  getClientes(): Observable<Usuarios> {

    return this.http.get<Usuarios>(`${this.baseUrl}/usuarios/1`).pipe(tap(datos => {
      this._auth = datos;
    }));
  }



}
