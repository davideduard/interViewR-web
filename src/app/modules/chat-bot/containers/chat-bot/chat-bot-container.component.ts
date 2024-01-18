import { Component, OnInit } from '@angular/core';
import { ChatBotService } from '../../services';
import { ChatResponse } from '../../types/chat-response';
import { DialogComponent } from '../../../../shared/components';
import { MatDialog } from '@angular/material/dialog';
import { RankingResponse } from '../../types';

@Component({
	selector: 'app-chat-bot-container',
	template: `
		<app-chat-bot
			[minutes]="minutes"
			[seconds]="seconds"
			[started]="started"
			[ended]="ended"
			(chatMessage)="onMessageReceived($event)"
			[isLoading]="isLoading"
			[isGenerating]="isGenerating"
		>
			<div
				*ngFor="let message of messages; index as i; let isLast = last"
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
					<div
						class="flex flex-row gap-1 items-center pt-2"
						*ngIf="isGenerating && isLast"
					>
						<div class="dot animate-pulse"></div>
						<div class="dot animate-pulse animation-delay-200"></div>
						<div class="dot animate-pulse animation-delay-300"></div>
					</div>
					<span>{{ message }}</span>
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
	isLoading: boolean = false;
	isGenerating: boolean = false;
	private intervalId: any;
	private messageId: number;

	constructor(
		private chatBotService: ChatBotService,
		public dialog: MatDialog
	) {
		this.minutes = 0;
		this.seconds = 30;
		this.started = false;
		this.ended = false;
		this.messageId = -1;
	}
	ngOnInit(): void {}

	openDialog(data: string): void {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '500px',
			data: data,
			disableClose: true
		});
	}

	startTimer(): void {
		this.started = true;
		this.intervalId = setInterval(() => {
			if (this.seconds > 0) {
				this.seconds--;
			} else if (this.minutes > 0) {
				this.minutes--;
				this.seconds = 59;
			} else {
				this.isLoading = true;
				this.stopTimer();
				this.requestRanking();
			}
		}, 1000);
	}

	requestRanking(): void {
		this.chatBotService
			.requestRanking(this.messageId)
			.subscribe((response: RankingResponse) => {
				this.openDialog(response.message);
				this.isLoading = false;
			});
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
		this.messages.push('');
		this.isGenerating = true;

		this.chatBotService
			.requestChat(message, this.messageId)
			.subscribe((response: ChatResponse) => {
				this.messages.pop();
				this.messages.push(response.message);
				this.messageId = response.chatId;
				this.isGenerating = false;
			});
	}

	ngOnDestroy(): void {
		this.stopTimer();
	}
}
