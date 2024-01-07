import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class AuthRepository {
	private apiUrl: string = 'http://localhost:8080/api/auth';

	constructor(private httpClient: HttpClient) {}

	login(email: string, password: string): Observable<LoginResponse> {
		const requestData = { email, password };
		return this.httpClient.post<LoginResponse>(
			`${this.apiUrl}/signin`,
			requestData
		);
	}

	isLoggedIn(): boolean {
		return localStorage.getItem('auth-token') !== null;
	}
}
