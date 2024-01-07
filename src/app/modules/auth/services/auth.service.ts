import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private authRepository: AuthRepository) {}

	login(username: string, password: string): Observable<any> {
		return this.authRepository.login(username, password);
	}

	isLoggedIn(): boolean {
		return this.authRepository.isLoggedIn();
	}
}
