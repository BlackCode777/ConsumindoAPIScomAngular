import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

//Observable

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  // metodo para obtener todos los pokemones

  get apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      (tap((res) => res),
      tap((res) => {
        console.log(res);
        res.results.map((resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
      }))
    );
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(tap((res) => res));
  }
}
