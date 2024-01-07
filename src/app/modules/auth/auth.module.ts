import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { AuthLayoutComponent } from '../../layouts';
import { TextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { FlatButtonComponentComponent } from '../../shared/components';
import { RegisterComponent } from './components/register/register.component';
import { RegisterContainer } from './containers/register-container/register-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		...fromComponents.components,
		...fromContainers.containers,
		RegisterComponent,
		RegisterContainer
	],
	exports: [],
	imports: [
		CommonModule,
		AuthRoutingModule,
		AuthLayoutComponent,
		TextFieldComponent,
		FlatButtonComponentComponent,
		FormsModule
	]
})
export class AuthModule {}
