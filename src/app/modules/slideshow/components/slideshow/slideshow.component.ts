import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgIf } from '@angular/common';
import { IconButtonComponent } from '../../../../shared/components';
import { SlideshowModule } from '../../slideshow.module';

@Component({
	selector: 'app-slideshow',
	standalone: true,
	template: `
		<div class="flex flex-col">
			<app-slide-one *ngIf="slideNumber === 1"></app-slide-one>
			<app-slide-two *ngIf="slideNumber === 2"></app-slide-two>
			<app-slide-three *ngIf="slideNumber === 3"></app-slide-three>
			<app-slide-four *ngIf="slideNumber === 4"></app-slide-four>
			<div
				class="flex flex-row gap-3 absolute bottom-5 self-center items-center"
			>
				<app-icon-button icon="back" (click)="prevSlide()"></app-icon-button>
				<div
					class="rounded-full bg-white"
					[ngClass]="
						slideNumber === 1 ? 'opacity-100 w-5 h-3' : 'opacity-50 w-3 h-3'
					"
				></div>
				<div
					class="rounded-full bg-white"
					[ngClass]="
						slideNumber === 2 ? 'opacity-100 w-5 h-3' : 'opacity-50 w-3 h-3'
					"
				></div>
				<div
					class="rounded-full bg-white"
					[ngClass]="
						slideNumber === 3 ? 'opacity-100 w-5 h-3' : 'opacity-50 w-3 h-3'
					"
				></div>
				<div
					class="rounded-full bg-white"
					[ngClass]="
						slideNumber === 4 ? 'opacity-100 w-5 h-3' : 'opacity-50 w-3 h-3'
					"
				></div>
				<app-icon-button icon="next" (click)="nextSlide()"></app-icon-button>
			</div>
		</div>
	`,
	imports: [MatIconModule, IconButtonComponent, NgClass, SlideshowModule, NgIf],
	styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
	slideNumber: number = 1;
	slideIcon: string = 'slide-' + this.slideNumber;

	nextSlide() {
		if (this.slideNumber < 4) {
			this.slideNumber += 1;
		} else {
			this.slideNumber = 1;
		}

		this.slideIcon = 'slide-' + this.slideNumber;
	}

	prevSlide() {
		if (this.slideNumber > 1) {
			this.slideNumber -= 1;
		} else {
			this.slideNumber = 4;
		}
		this.slideIcon = 'slide-' + this.slideNumber;
	}
}
