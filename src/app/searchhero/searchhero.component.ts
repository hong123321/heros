import { Component, OnInit } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';
import { Hero } from '../model/heros';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-searchhero',
  templateUrl: './searchhero.component.html',
  styleUrls: ['./searchhero.component.scss']
})
export class SearchheroComponent implements OnInit {
 
  heroes!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private herosv:HeroserviceService) { }

  ngOnInit(): void {
    this.heroes = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.herosv.handleSearch(term)),
    )
  
  }
  search(term:string):void{
    console.log(term);
    this.searchTerms.next(term);
    
  }

}
