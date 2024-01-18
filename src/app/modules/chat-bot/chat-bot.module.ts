import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatBotRoutingModule } from './chat-bot-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { TextFieldComponent } from '../../shared/components';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	imports: [
		CommonModule,
		ChatBotRoutingModule,
		TextFieldComponent,
		FormsModule,
		MatIconModule,
		MatDialogModule
	]
})
export class ChatBotModule {}
