import { Component } from '@angular/core';

@Component({
	selector: 'app-register',
	template: `
		<app-auth-layout>
			<div question class="text-sm font-bold">
				<p class="text-accent-lightest opacity-60">
					Already have an account?
					<a class="text-primary cursor-pointer" [routerLink]="['../login']"
						>Click here</a
					>
				</p>
			</div>
		</app-auth-layout>
	`,
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {}
