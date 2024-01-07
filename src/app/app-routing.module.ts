import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, notAuthGuard } from './guards';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./modules/auth/auth.module').then(module => module.AuthModule),
		canActivate: [notAuthGuard]
	},
	{
		path: '',
		loadChildren: () =>
			import('./modules/chat-bot/chat-bot.module').then(
				module => module.ChatBotModule
			),
		canActivate: [authGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
