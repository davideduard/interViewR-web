import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

interface LoginResponse {
	token: string;
}


@Component({
	selector: 'app-login-container',
	template: ` <app-login (loginRequested)="onLogin($event)"></app-login> `,
	styleUrls: ['./login-container.component.scss']
})
export class LoginContainer {
	constructor(private authService: AuthService) {}
	onLogin(credentials: { username: string; password: string }) {
		this.authService
			.login(credentials.username, credentials.password);
	}
}
