import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'

@Injectable()

export class HeroService {
	// Promise Parameter behaves like function(Promise(Hero)) {}
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	};
}