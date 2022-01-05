import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HttpClientModule } from '@angular/common/http';

//data sever
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
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
    path: 'detail/:id', 
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
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
