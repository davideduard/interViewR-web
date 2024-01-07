import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
	selector: 'app-text-field',
	standalone: true,
	imports: [CommonModule, MatInputModule],
	template: `
		<div class="w-full">
			<mat-form-field appearance="fill">
				<mat-label>{{ label }}</mat-label>
				<input
					type="{{ type }}"
					matInput
					[value]="value"
					(input)="onInput($event)"
				/>
			</mat-form-field>
		</div>
	`,
	styleUrls: ['./text-field.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextFieldComponent),
			multi: true
		}
	]
})
export class TextFieldComponent implements ControlValueAccessor {
	@Input() label = '';
	@Input() type = '';

	value: string = '';

	onChange = (value: any) => {};
	onTouched = () => {};

	writeValue(value: any): void {
		this.value = value;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	onInput(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.value = input.value;
		this.onChange(this.value);
	}
}
