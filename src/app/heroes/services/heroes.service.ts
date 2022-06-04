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
//http://localhost:3000/heroes?q=a&_limit=6
  getHeroePorId(id: string){
    // return this.http.get<Heroe[]>('http://localhost:3000/heroes/'+ id)
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes/${id}`)
    }

  getSugerencia(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes/?q=${ termino }&_limit=6`)
  }

}

