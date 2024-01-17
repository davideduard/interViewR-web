import { Component, OnInit } from '@angular/core';
import { ChatBotService } from '../../services';
import { ChatResponse } from '../../types/chat-response';

@Component({
	selector: 'app-chat-bot-container',
	template: `
		<app-chat-bot
			[minutes]="minutes"
			[seconds]="seconds"
			[started]="started"
			[ended]="ended"
			(chatMessage)="onMessageReceived($event)"
		>
			<div
				*ngFor="let message of messages; index as i"
				[ngClass]="{ 'bg-white-darker': i % 2 == 1 }"
				class="w-full flex gap-4 text-left pl-10 pt-3 pb-3 h-auto"
			>
				<div
					class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
					[ngClass]="{ 'bg-primary': i % 2 == 0, 'bg-secondary': i % 2 == 1 }"
				>
					{{ i % 2 == 0 ? nameInitial : botInitial }}
				</div>
				<div class="pt-1 w-full text-justify pr-8">
					{{ message }}
				</div>
			</div>
		</app-chat-bot>
	`,
	styleUrls: ['./chat-bot-container.component.scss']
})
export class ChatBotContainer implements OnInit {
	minutes: number;
	seconds: number;
	started: boolean;
	ended: boolean;
	messages: string[] = [];
	nameInitial: string = 'ED';
	botInitial: string = 'C';
	private intervalId: any;
	private messageId: number;

	constructor(private chatBotService: ChatBotService) {
		this.minutes = 15;
		this.seconds = 0;
		this.started = false;
		this.ended = false;
		this.messageId = -1;
	}
	ngOnInit(): void {}

	startTimer(): void {
		this.started = true;
		this.intervalId = setInterval(() => {
			if (this.seconds > 0) {
				this.seconds--;
			} else if (this.minutes > 0) {
				this.minutes--;
				this.seconds = 59;
			} else {
				this.stopTimer();
			}
		}, 1000);
	}

	stopTimer(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.ended = true;
		}
	}

	onMessageReceived(message: string): void {
		if (!this.started) {
			this.started = true;
			this.startTimer();
		}
		this.messages.push(message);
		this.chatBotService
			.requestChat(message, this.messageId)
			.subscribe((response: ChatResponse) => {
				this.messages.push(response.message);
				this.messageId = response.chatId;
			});
	}

	ngOnDestroy(): void {
		this.stopTimer();
	}
}
