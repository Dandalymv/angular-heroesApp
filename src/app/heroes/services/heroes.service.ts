import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes`)
  }
  getHeroePorId(id: string){
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes/${id}`)
    }

  getSugerencia(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes/?q=${ termino }&_limit=6`)
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.apiUrl}/heroes`,heroe);
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.apiUrl}/heroes/${heroe.id}`,heroe);
  }

  borrarHeroe(id: string): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/heroes/${id}`);
  }

}

