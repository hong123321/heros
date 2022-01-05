import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/heros'
import { ActivatedRoute } from '@angular/router';
import { HeroserviceService } from '../heroservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero:any; //search class


  constructor(
    private route:ActivatedRoute,
    private sendid:HeroserviceService,
    private goBack:Location
    ) { }

  ngOnInit(): void {
  this.getIdHero()
  }
  getIdHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.sendid.sendHeroById(id).subscribe(data=>this.hero=data)
  }
  handleBack():void{
    this.goBack.back()
  }
  save(): void {
    if (this.hero) {
      this.sendid.updateHero(this.hero)
        .subscribe(() => this.handleBack());
    }
  }
}
