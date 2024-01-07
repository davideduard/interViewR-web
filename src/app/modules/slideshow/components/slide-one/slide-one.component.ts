import { Component } from '@angular/core';

@Component({
	selector: 'app-slide-one',
	template: `
		<div class="flex flex-col gap-20">
			<p class="text-white text-4xl font-bold w-[510px] pl-10 pt-20">
				Improve your communication skills
			</p>
			<p class="pl-10 text-white text-2xl w-[530px] opacity-50">
				Train with all kind of persons in Virtual Reality to never miss any
				information again and reduce gathering informations time!
			</p>
			<mat-icon
				svgIcon="slide-1"
				class="self-center scale-x-[25] scale-y-[25] absolute bottom-80"
			></mat-icon>
		</div>
	`,
	styleUrls: ['./slide-one.component.scss']
})
export class SlideOneComponent {}
