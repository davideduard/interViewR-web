import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [...fromComponents.components],
	exports: [...fromComponents.components],
	imports: [CommonModule, MatIconModule]
})
export class SlideshowModule {}
