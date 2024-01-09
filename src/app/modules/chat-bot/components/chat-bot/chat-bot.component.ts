import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-chat-bot',
	template: `
		<div class="absolute bg-white-darker w-full h-full flex flex-col gap-32">
			<div
				class="w-[75%] h-full relative left-1/2 -translate-x-1/2 pt-6 flex flex-col gap-6"
			>
				<div class="self-end pr-6 text-accent-darkest font-bold text-sm">
					{{ minutes }} m {{ seconds }} s left
				</div>
				<div class="h-[85%] bg-white rounded-xl">
					<div
						class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl text-accent text-opacity-40"
						*ngIf="!started"
					>
						Say “hello” to start the conversation
					</div>
				</div>
				<div class="h-[5%] bg-white rounded-xl"></div>
			</div>
		</div>
	`,
	styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
	@Input() minutes: number = 15;
	@Input() seconds: number = 0;
	@Input() started: boolean = false;
}
