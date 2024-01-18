import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
	selector: 'app-flat-button-component',
	standalone: true,
	imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
	template: `
		<div class="w-full">
			<button mat-flat-button>
				<mat-spinner
					*ngIf="isLoading"
					diameter="20"
					color="accent"
				></mat-spinner>
				<span *ngIf="!isLoading"> {{ label }} </span>
			</button>
		</div>
	`,
	styleUrls: ['./flat-button-component.component.scss']
})
export class FlatButtonComponentComponent {
	@Input() label: string = '';
	@Input() isLoading: boolean = false;
}
