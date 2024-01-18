import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef
} from '@angular/material/dialog';
import { TextFieldComponent } from '../text-field/text-field.component';
import { FlatButtonComponentComponent } from '../flat-button-component/flat-button-component.component';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-dialog',
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule,
		TextFieldComponent,
		FlatButtonComponentComponent,
		FormsModule
	],
	template: `
		<h2 mat-dialog-title>Time's up! Time for the final review</h2>
		<div mat-dialog-content>
			AI has analysed your conversation and based on your questions and the
			responses given, you managed to get approximately
			<div class="text-bold">{{ data }}</div>
			of the provided information right!
		</div>
		<div mat-dialog-actions class="flex flex-col justify-center items-center">
			<app-flat-button-component
				class="self-center w-32"
				label="Continue"
				(click)="onContinue()"
			></app-flat-button-component>
		</div>
	`,
	styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
	constructor(
		private dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: string
	) {}

	onContinue(): void {
		this.dialogRef.close();
	}
}
