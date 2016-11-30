import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <h2>{{title}}</h2>
    <h2>{{hero.name}} details!</h2>
    <p>id: {{hero.id}}</p>
    <label>name: </label>
    <input [(ngModel)]="hero.name" type="text" placeholder="name" />
  `,
})

export class AppComponent  {
    name = 'David';
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
