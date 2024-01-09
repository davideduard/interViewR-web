import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chat-bot-container',
	template: `
		<app-chat-bot
			[minutes]="minutes"
			[seconds]="seconds"
			[started]="false"
		></app-chat-bot>
	`,
	styleUrls: ['./chat-bot-container.component.scss']
})
export class ChatBotContainer implements OnInit {
	minutes: number;
	seconds: number;
	constructor() {
		this.minutes = 15;
		this.seconds = 0;
	}
	ngOnInit(): void {}
}
