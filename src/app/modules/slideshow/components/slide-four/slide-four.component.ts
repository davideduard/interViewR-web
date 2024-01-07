import { Component } from '@angular/core';

@Component({
	selector: 'app-slide-four',
	template: `
		<div class="flex flex-col gap-20">
			<p class="text-white text-4xl font-bold w-[510px] pl-10 pt-20">
				Sharpen your skills in a people free environment
			</p>
			<p class="pl-10 text-white text-2xl w-[530px] opacity-50">
				Increase your social skills by training with our holobots, without
				worrying about uncomfortable interactions!
			</p>
			<mat-icon
				svgIcon="slide-4"
				class="self-center scale-x-[19] scale-y-[19] absolute bottom-[350px]"
			></mat-icon>
		</div>
	`,
	styleUrls: ['./slide-four.component.scss']
})
export class SlideFourComponent {}
