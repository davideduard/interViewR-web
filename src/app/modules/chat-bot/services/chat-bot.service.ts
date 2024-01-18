import { Injectable } from '@angular/core';
import { ChatBotRepository } from '../repositories';
import { Observable } from 'rxjs';
import { ChatResponse } from '../types/chat-response';
import { RankingResponse } from '../types';

@Injectable({
	providedIn: 'root'
})
export class ChatBotService {
	constructor(private chatBotRepository: ChatBotRepository) {}

	requestChat(message: string, chatId?: number): Observable<ChatResponse> {
		return this.chatBotRepository.requestChat(message, chatId);
	}

	requestRanking(chatId: number): Observable<RankingResponse> {
		return this.chatBotRepository.requestRanking(chatId);
	}
}
