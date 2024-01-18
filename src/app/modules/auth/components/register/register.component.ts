import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterRequest } from '../../types';

@Component({
	selector: 'app-register',
	template: `
		<app-auth-layout>
			<div form class="flex flex-col items-center gap-2">
				<div class="w-[550px] pt-10">
					<app-text-field
						[(ngModel)]="firstName"
						name="firstName"
						label="First Name"
					></app-text-field>
					<app-text-field [(ngModel)]="lastName" label="Last Name">
					</app-text-field>
					<app-text-field [(ngModel)]="email" name="email" label="Email">
					</app-text-field>
					<app-text-field
						[(ngModel)]="password"
						name="password"
						label="Password"
						type="password"
					>
					</app-text-field>
				</div>

				<div class="w-44 pt-2">
					<app-flat-button-component
						(click)="onRegister()"
						label="Sign Up"
						[isLoading]="isLoading"
					>
					</app-flat-button-component>
				</div>
			</div>
			<div question class="text-sm font-bold">
				<p class="text-accent-lightest opacity-60">
					Already have an account?
					<a class="text-primary cursor-pointer" [routerLink]="['../login']"
						>Click here</a
					>
				</p>
			</div>
		</app-auth-layout>
	`,
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	firstName: string = '';
	lastName: string = '';
	email: string = '';
	password: string = '';

	@Input() isLoading: boolean = false;

	@Output() registerRequested = new EventEmitter<RegisterRequest>();

	onRegister(): void {
		this.registerRequested.emit({
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			password: this.password
		});
	}
}
