import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface LoginResponse {
	token: string;
}


@Injectable({
	providedIn: 'root'
})
export class AuthRepository {

	private apiUrl: string = "http://localhost:8080/api/auth"

	constructor(private httpClient: HttpClient) {
	}

	// login(username: string, password: string) {
	// 	// Simulate a server response
	// 	if (username === 'admin' && password === 'password') {
	// 		const token: string = 'fake-jwt-token';
	// 		localStorage.setItem('auth-token', token);
	// 		return of({ success: true, token });
	// 	} else {
	// 		return of({
	// 			success: false,
	// 			message: 'Username or password is incorrect'
	// 		});
	// 	}
	// }

	login(email: string, password: string): Observable<LoginResponse> {
		const requestData = {email, password}
		return this.httpClient.post<LoginResponse>(`${this.apiUrl}/signin`, requestData)
	}

	isLoggedIn(): boolean {
		return localStorage.getItem('auth-token') !== null;
	}
}
