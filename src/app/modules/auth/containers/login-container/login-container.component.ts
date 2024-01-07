import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../interfaces';

@Component({
	selector: 'app-login-container',
	template: ` <app-login (loginRequested)="onLogin($event)"></app-login> `,
	styleUrls: ['./login-container.component.scss']
})
export class LoginContainer {
	constructor(
		private authService: AuthService,
		private router: Router
	) {}
	onLogin(credentials: { email: string; password: string }) {
		this.authService.login(credentials.email, credentials.password).subscribe(
			(response: LoginResponse) => {
				if (response.token) {
					const token = response.token;
					localStorage.setItem('auth-token', token);
					this.router.navigate(['/']);
				}
			},
			error => {
				console.log('err');
			}
		);
	}
}
