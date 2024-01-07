import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';

interface LoginResponse {
	token: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private authRepository: AuthRepository) {}

	login(username: string, password: string){
		this.authRepository.login(username, password).subscribe(
			(response: LoginResponse) => {
				const token = response.token;
				localStorage.setItem('auth-token', token);
			}
		);

	}

	isLoggedIn(): boolean {
		return this.authRepository.isLoggedIn();
	}
}
