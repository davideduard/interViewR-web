import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBotRoutingModule } from './chat-bot-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { TextFieldComponent } from '../../shared/components';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	imports: [CommonModule, ChatBotRoutingModule, TextFieldComponent]
})
export class ChatBotModule {}
