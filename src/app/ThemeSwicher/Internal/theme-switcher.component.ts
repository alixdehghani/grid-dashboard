import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { StorageService } from './Services/StorageService';

@Component({
	selector: 'app-theme-switcher',
	template: `
	<nb-icon *ngIf="showDefaultThemeIcon" status="warning" icon="sun-outline" nbTooltip="Light" nbTooltipPlacement="top" (click)="changeToDefault()"></nb-icon>
	<nb-icon *ngIf="showDarkThemeIcon" status="primary" icon="moon-outline" nbTooltip="Dark" nbTooltipPlacement="top" (click)="changeToDark()"></nb-icon>
	`,
	providers: [StorageService]
})
export class ThemeSwitcherComponent {

	showDarkThemeIcon = false;
	showDefaultThemeIcon = false;

	constructor(
		private readonly _nbThemeService: NbThemeService,
		private readonly _storageService: StorageService
	) {
		const themeName = this._storageService.getThemeName();

		switch (themeName) {
			case "dark": this.changeToDark(); break;
			case "default": this.changeToDefault(); break;
			default: this.changeToDefault();
		}
	}

	changeToDark(): void {
		this._nbThemeService.changeTheme('dark');
		this._storageService.storeThemeName('dark');
		this.showDarkThemeIcon = false;
		this.showDefaultThemeIcon = true;
	}

	changeToDefault(): void {
		this._nbThemeService.changeTheme('default');
		this._storageService.storeThemeName('default');
		this.showDarkThemeIcon = true;
		this.showDefaultThemeIcon = false;
	}

}