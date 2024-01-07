import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-login',
	template: `<app-auth-layout>
		<div form class="flex flex-col items-center gap-2">
			<div class="w-[550px] pt-10">
				<app-text-field
					[(ngModel)]="username"
					name="username"
					label="username"
				></app-text-field>
				<app-text-field
					[(ngModel)]="password"
					name="password"
					label="password"
					type="password"
				></app-text-field>
			</div>
			<div class="w-44 pt-2">
				<app-flat-button-component
					(click)="onLogin()"
					label="Continue"
				></app-flat-button-component>
			</div>
			<p class="text-primary text-xs cursor-pointer font-bold pt-1">
				Forgot password?
			</p>
		</div>
		<div question class="text-sm font-bold">
			<p class="text-accent-lightest opacity-60">
				Don't have an account?
				<a class="text-primary cursor-pointer" [routerLink]="['/register']"
					>Click here</a
				>
			</p>
		</div>
	</app-auth-layout> `,
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	username: string = '';
	password: string = '';

	@Output() loginRequested = new EventEmitter<{
		username: string;
		password: string;
	}>();

	onLogin() {
		this.loginRequested.emit({
			username: this.username,
			password: this.password
		});
	}
}
