import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div>Setup completed</div>
		<h1 class="text-primary">primary</h1>
		<h1 class="text-secondary">secondary</h1>
		<h1 class="text-accent">accent</h1>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'interViewR-web';
}
