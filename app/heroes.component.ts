import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
	selector: 'my-heroes',
 	templateUrl: 'app/hero/heroes.html',
	styles: [`
	  	.selected {
			background-color: #CFD8DC;
			color: white;
		}
	`]
})

export class HeroesComponent implements OnInit {
	name = 'David';
	heroes: Hero[];
	onSelect(hero: Hero): void {
		// on click, select hero
		// this -> appComponent object
		// assign selectHero to hero
		// onSelect is private function
		this.selectedHero = hero;;
	};
	selectedHero: Hero;
	constructor(private heroService: HeroService) { };
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	};
	ngOnInit(): void {
		this.getHeroes();
	}
}
