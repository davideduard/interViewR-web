import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from '../../modules/slideshow/components';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-auth-layout',
	standalone: true,
	imports: [CommonModule, SlideshowComponent, MatIconModule],
	template: `
		<div class="flex flex-row w-full h-full">
			<div class="h-[100%] w-[40%] bg-primary">
				<app-slideshow></app-slideshow>
			</div>
			<div class="h-full w-[60%] relative">
				<div class="flex flex-col gap-2">
					<p
						class="text-accent-lightest text-4xl font-bold w-[510px] pl-10 pt-20"
					>
						InterViewR
					</p>
					<p class="text-accent-lightest text-opacity-60 text-2xl pl-10">
						Interviewing has never been easier
					</p>
				</div>

				<div
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					<ng-content select="[form]"></ng-content>
				</div>

				<div
					class="flex flex-col absolute left-1/2 gap-3 -translate-x-1/2 bottom-28"
				>
					<div class="flex flex-row gap-3 items-center">
						<div class="line"></div>
						<p class="text-accent-lightest text-xs font-bold opacity-60">or</p>
						<div class="line"></div>
					</div>

					<div class="flex flex-row self-center items-center gap-2">
						<mat-icon
							svgIcon="google"
							class="scale-x-[0.8] scale-y-[0.8] mb-3"
						></mat-icon>
						<p class="text-base text-accent-lightest font-bold cursor-pointer">
							Sign in with google
						</p>
					</div>
				</div>

				<div class="bottom-6 absolute left-1/2 -translate-x-1/2">
					<ng-content select="[question]"></ng-content>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {}
