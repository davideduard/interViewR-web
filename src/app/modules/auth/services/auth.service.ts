import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';
import { LoginResponse, RegisterResponse } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private authRepository: AuthRepository) {}

	login(email: string, password: string): Observable<LoginResponse> {
		return this.authRepository.login(email, password);
	}

	isLoggedIn(): boolean {
		return this.authRepository.isLoggedIn();
	}

	register(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	): Observable<RegisterResponse> {
		return this.authRepository.register(firstName, lastName, email, password);
	}
}
