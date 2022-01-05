import { Injectable } from '@angular/core';
import { Hero } from './model/heros';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {
  private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }



  /** GET heroes from the server */
  sendeHero(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
  // return of(HEROES)
}

  // sendIdHero(id:any):Observable<any>{
  //   return of(HEROES.find(hr=>hr.id===id))
    
  // }
  sendHeroById(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
  }

  //save hero
  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
  }
  //add hero
  addHeros(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
  }
  //delete hero
  handleDelete(hero:Hero | number):Observable<Hero>{
    const id = typeof hero ==='number' ? hero : hero.id
    const url = `${this.heroesUrl}/${id}`
    return this.http.delete<Hero>(url, this.httpOptions) 
  }
  //search hero
  handleSearch(term:string):Observable<Hero[]>{
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
  }
}


