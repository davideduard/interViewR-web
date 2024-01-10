import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class IconRegistryService {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {}

	registerCustomIcons(): void {
		this.matIconRegistry.addSvgIcon(
			'slide-1',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'/assets/icons/slide_1.svg'
			)
		);

		this.matIconRegistry.addSvgIcon(
			'slide-2',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'/assets/icons/slide_2.svg'
			)
		);

		this.matIconRegistry.addSvgIcon(
			'slide-3',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'/assets/icons/slide_3.svg'
			)
		);

		this.matIconRegistry.addSvgIcon(
			'slide-4',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'/assets/icons/slide_4.svg'
			)
		);

		this.matIconRegistry.addSvgIcon(
			'back',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/back.svg')
		);

		this.matIconRegistry.addSvgIcon(
			'next',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/next.svg')
		);

		this.matIconRegistry.addSvgIcon(
			'google',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'/assets/icons/google.svg'
			)
		);

		this.matIconRegistry.addSvgIcon(
			'send',
			this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/send.svg')
		);
	}
}
