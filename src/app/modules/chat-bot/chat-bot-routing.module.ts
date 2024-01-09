import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBotContainer } from './containers';

const routes: Routes = [
	{
		path: '',
		component: ChatBotContainer
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChatBotRoutingModule {}
