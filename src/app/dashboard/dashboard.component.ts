import { Component, OnInit } from '@angular/core';
import {HEROES } from '../mock-data/mock-hero'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title:string=''
  heros=HEROES
  constructor() {
    this.title="Tour of Hero"
   }

  ngOnInit(): void {
  }

}
