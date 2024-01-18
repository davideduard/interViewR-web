import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../types';
import { RegisterResponse } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register-container',
	template: `
		<app-register
			(registerRequested)="onRegister($event)"
			[isLoading]="isLoading"
		></app-register>
	`,
	styleUrls: ['./register-container.component.scss']
})
export class RegisterContainer {
	isLoading: boolean = false;

	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	onRegister(registerRequest: RegisterRequest) {
		this.isLoading = true;
		this.authService
			.register(
				registerRequest.firstName,
				registerRequest.lastName,
				registerRequest.email,
				registerRequest.password
			)
			.subscribe(
				(response: RegisterResponse) => {
					if (response.token) {
						const token = response.token;
						localStorage.setItem('auth-token', token);
						this.router.navigate(['/']);
						this.isLoading = false;
					}
				},
				error => {
					console.log('err');
				}
			);
	}
}
