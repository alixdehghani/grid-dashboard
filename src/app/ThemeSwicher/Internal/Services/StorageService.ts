import { Injectable } from '@angular/core';

import { ThemeName } from '../Types/ThemeName';

@Injectable()

export class StorageService {

    getThemeName(): ThemeName {
        const themeName = localStorage.getItem(this._getKey());
        if(this._themeNameIsValid(themeName)) {
            return themeName as ThemeName;
        } else {
            return null;
        }
    }

    storeThemeName(name: ThemeName): void {
        localStorage.setItem(this._getKey(), name);
    }

    private _themeNameIsValid(name: string): boolean {
        if(name === 'dark' || name === 'default') {
            return true;
        }
        return false;
    }

    private _getKey(): string {
        return `GridDashboardThemeName`;
    }
}