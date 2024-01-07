import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer, RegisterContainer } from './containers';
import { authGuard } from '../../guards';

const routes: Routes = [
	{
		path: 'login',
		component: LoginContainer
	},
	{
		path: 'register',
		component: RegisterContainer
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
