import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-icon-button',
	standalone: true,
	imports: [CommonModule, MatIconModule, MatButtonModule],
	template: `
		<button mat-icon-button>
			<mat-icon [svgIcon]="icon"></mat-icon>
		</button>
	`,
	styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
	@Input() icon: string = '';
}
