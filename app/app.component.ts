import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
        <div class="row">
            <div class="large-6 column">
                <nav>
                     <a routerLink="/dashboard">Dashboard</a>
                     <a routerLink="/heroes">Heroes</a>
                 </nav>
              <router-outlet></router-outlet>
            </div>
        </div>
	`,
    styles: [`
        nav {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        nav a {
            padding: 6px 12px;
            margin-right: 15px;
            background-color: #eaeaea;
            border-radius: 4px;
        }
    `]
})

export class AppComponent {
	title = 'Mega Man Bosses';
}