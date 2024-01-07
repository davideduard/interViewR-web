import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../modules/auth/services/auth.service';

export const notAuthGuard: CanActivateFn = (route, state) => {
	const authService = inject(AuthService);
	const router = inject(Router);

	if (!authService.isLoggedIn()) {
		return true;
	} else {
		router.navigate(['/']);
		return false;
	}
};
