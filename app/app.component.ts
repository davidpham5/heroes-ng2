import { Component } from '@angular/core';
import { Hero } from './hero/hero';

// Mock
const HEROES: Hero[] = [
  { id: 11, name: 'Needle Man' },
  { id: 12, name: 'Magnet Man' },
  { id: 13, name: 'Gemini Man' },
  { id: 14, name: 'Hard Man' },
  { id: 15, name: 'Top Man' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Snake Man' },
  { id: 18, name: 'Spark Man' },
  { id: 19, name: 'Shadow Man' },
  { id: 20, name: 'Mega Man' }
]

@Component({
	selector: 'my-app',
 	templateUrl: 'app/hero/heroes.html',
	styles: [`
	  .selected {
		background-color: #CFD8DC !important;
		color: white;
	  }
	  .heroes {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 15em;
	  }
	  .heroes li {
		cursor: pointer;
		position: relative;
		left: 0;
		background-color: #EEE;
		margin: .5em;
		padding: .3em 0;
		height: 1.6em;
		border-radius: 4px;
	  }
	  .heroes li.selected:hover {
		background-color: #BBD8DC !important;
		color: white;
	  }
	  .heroes li:hover {
		color: #607D8B;
		background-color: #DDD;
		left: .1em;
	  }
	  .heroes .text {
		position: relative;
		top: -3px;
	  }
	  .heroes .badge {
		display: inline-block;
		font-size: small;
		color: white;
		padding: 0.8em 0.7em 0 0.7em;
		background-color: #607D8B;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -4px;
		height: 1.8em;
		margin-right: .8em;
		border-radius: 4px 0 0 4px;
	  }
	`]
})

export class AppComponent  {
	name = 'David';
	title = 'Tour of Heroes';
	heroes = HEROES;
	onSelect(hero: Hero): void {
		// on click, select hero
		// this -> appComponent object
		// assign selectHero to hero
		// onSelect is private function
		this.selectedHero = hero;
		console.log(this);
	};
	selectedHero: Hero;
}
