import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/heros'
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heros!:Hero[]
 
  constructor(public dataHero:HeroserviceService, ) { }

  ngOnInit(): void {
    this.getHero()
  }
  getHero(){
    this.dataHero.sendeHero().subscribe(hero=>this.heros=hero)
  }
  addhero(name:string){
    name = name.trim();
    if(!name){
      return;
    }
    this.dataHero.addHeros({ name } as unknown  as Hero).subscribe(data=>this.heros.push(data)
    )
  
    
  }

}
