import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';
import { LoginResponse } from '../interfaces';

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
}
