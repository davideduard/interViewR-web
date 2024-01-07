import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-flat-button-component',
	standalone: true,
	imports: [CommonModule, MatButtonModule],
	template: `
		<div class="w-full">
			<button mat-flat-button>{{ label }}</button>
		</div>
	`,
	styleUrls: ['./flat-button-component.component.scss']
})
export class FlatButtonComponentComponent {
	@Input() label: string = '';
}
