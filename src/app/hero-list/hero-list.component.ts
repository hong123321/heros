import { Component, OnInit } from '@angular/core';
import {HEROES } from '../mock-data/mock-hero'
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heros=HEROES
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero:any){
    this.heros=hero
  }
}
