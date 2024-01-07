import { Component } from '@angular/core';

@Component({
	selector: 'app-slide-three',
	template: `
		<div class="flex flex-col gap-20">
			<p class="text-white text-4xl font-bold w-[510px] pl-10 pt-20">
				Reduce business costs
			</p>
			<p class="pl-10 text-white text-2xl w-[530px] opacity-50">
				Reduce your monthly business costs by reducing interviewers training
				time and the number of necessary mentors to do so!
			</p>
			<mat-icon
				svgIcon="slide-3"
				class="self-center scale-x-[20] scale-y-[20] absolute bottom-80"
			></mat-icon>
		</div>
	`,
	styleUrls: ['./slide-three.component.scss']
})
export class SlideThreeComponent {}
