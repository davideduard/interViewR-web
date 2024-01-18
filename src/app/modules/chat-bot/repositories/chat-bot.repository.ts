import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatResponse } from '../types/chat-response';
import { ChatRequest, RankingRequest, RankingResponse } from '../types';

@Injectable({
	providedIn: 'root'
})
export class ChatBotRepository {
	//private apiUrl: string = 'https://interviewr-be.onrender.com/api/chat';
	private apiUrl: string = 'http://localhost:8080/api/auth';
	constructor(private httpClient: HttpClient) {}

	requestChat(message: string, chatId?: number): Observable<ChatResponse> {
		const token = localStorage.getItem('auth-token');

		let headers = new HttpHeaders();
		if (token) {
			headers = headers.set('Authorization', `Bearer ${token}`);
		}

		const requestData: ChatRequest = { chatId, message };
		return this.httpClient.post<ChatResponse>(
			`${this.apiUrl}/gptmessage`,
			requestData,
			{ headers: headers }
		);
	}

	requestRanking(chatId: number): Observable<RankingResponse> {
		const token = localStorage.getItem('auth-token');

		let headers = new HttpHeaders();
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}

		const requestData: RankingRequest = { chatId };
		return this.httpClient.post<RankingResponse>(
			`${this.apiUrl}/endmessage`,
			requestData,
			{ headers: headers }
		);
	}
}
