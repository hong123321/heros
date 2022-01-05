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
  //save hero
  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
  }
  //add hero
  addHeros(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
  }
}


