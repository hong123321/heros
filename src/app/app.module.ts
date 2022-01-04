import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
const routes:Routes=[
  {
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full'
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'detail', 
    component: HeroDetailComponent
  },
  {
    path:'listhero',
    component:HeroListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroListComponent,
    CreateHeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
