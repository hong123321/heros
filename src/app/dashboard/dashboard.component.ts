import { Component, OnInit } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';
import { Hero } from '../model/heros';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string = ''
  heros: Hero[] = [];
  constructor(private hero: HeroserviceService) {
    this.title = "Tour of Hero";
  }

  ngOnInit(): void {
    this.getMyHero();
  }
  getMyHero(): void {
    this.hero.sendeHero().subscribe(myHero => this.heros = myHero.slice(0, 4));
  }
}
