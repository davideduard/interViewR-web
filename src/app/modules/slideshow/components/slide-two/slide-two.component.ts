import { Component } from '@angular/core';

@Component({
	selector: 'app-slide-two',
	template: `
		<div class="flex flex-col gap-20">
			<p class="text-white text-4xl font-bold w-[510px] pl-10 pt-20">
				Increase your employees satisfaction at work
			</p>
			<p class="pl-10 text-white text-2xl w-[530px] opacity-50">
				Train your interviewing skills in order to find the best people for your
				company. We all know how important is to work in a friendly and
				enjoyable environment!
			</p>
			<mat-icon
				svgIcon="slide-2"
				class="self-center scale-x-[20] scale-y-[20] absolute bottom-80"
			></mat-icon>
		</div>
	`,
	styleUrls: ['./slide-two.component.scss']
})
export class SlideTwoComponent {}
