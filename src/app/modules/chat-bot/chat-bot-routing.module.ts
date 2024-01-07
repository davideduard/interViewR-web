import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';

const routes: Routes = [
	{
		path: '',
		component: ChatBotComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChatBotRoutingModule {}
