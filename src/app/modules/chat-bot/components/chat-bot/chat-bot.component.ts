import { Component, EventEmitter, Input, Output } from '@angular/core';

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
				<div class="h-[85%] bg-white rounded-xl pt-14 overflow-auto pb-10">
					<div
						class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl text-accent text-opacity-40 text-center"
						*ngIf="!started"
					>
						Say “Hello, let's start the interview” or greet the person to start
						the conversation
					</div>
					<div
						class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl text-accent text-opacity-40"
						*ngIf="ended"
					>
						<div
							class="self-center text-center animate-pulse"
							*ngIf="isLoading"
						>
							Your results are loading...
						</div>

						<div class="self-center text-center" *ngIf="!isLoading">
							Time's up!
						</div>
					</div>
					<div *ngIf="started && !ended">
						<ng-content></ng-content>
					</div>
				</div>
				<div class="h-[5%] bg-white rounded-xl flex flex-row pr-4">
					<input
						type="text"
						class="w-full h-full rounded-xl pl-5 focus:outline-none"
						placeholder="Type your message here..."
						[(ngModel)]="currentMessage"
						(keyup.enter)="onEnter()"
						[disabled]="ended || isGenerating"
					/>
					<img
						src="/assets/icons/send.svg"
						class="scale-[0.7] hover:cursor-pointer"
						(click)="onEnter()"
					/>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
	@Input() minutes: number = 15;
	@Input() seconds: number = 0;
	@Input() started: boolean = false;
	@Input() ended: boolean = false;
	@Input() isLoading: boolean = false;
	@Input() isGenerating: boolean = false;

	@Output() chatMessage: EventEmitter<string> = new EventEmitter<string>();

	currentMessage: string = '';

	onEnter(): void {
		if (this.currentMessage.trim() != '') {
			this.chatMessage.emit(this.currentMessage);
			this.currentMessage = '';
		}
	}
}
