import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthRepository {
	constructor() {}

	login(username: string, password: string) {
		// Simulate a server response
		if (username === 'admin' && password === 'password') {
			const token: string = 'fake-jwt-token';
			localStorage.setItem('auth-token', token);
			return of({ success: true, token });
		} else {
			return of({
				success: false,
				message: 'Username or password is incorrect'
			});
		}
	}

	isLoggedIn(): boolean {
		return localStorage.getItem('auth-token') !== null;
	}
}
