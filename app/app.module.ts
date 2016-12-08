import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero/hero.service';

@NgModule({
	imports: [
			BrowserModule,
			FormsModule,
			RouterModule.forRoot([
				{
				  path: 'dashboard',
				  component: DashboardComponent
				},
				{
					path: 'heroes',
					component: HeroesComponent
				},
				{
				  path: '',
				  redirectTo: '/dashboard',
				  pathMatch: 'full'
				},
			])
	],
	declarations: [
	  AppComponent,
	  DashboardComponent,
	  HeroDetailComponent,
	  HeroesComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [ AppComponent ]
})



export class AppModule { }
