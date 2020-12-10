import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule, NbTooltipModule } from '@nebular/theme';
import { ThemeSwitcherComponent } from './theme-switcher.component';

@NgModule({
    declarations:[
        ThemeSwitcherComponent
    ],
    imports:[
        NbIconModule,
        NbTooltipModule,
        CommonModule
    ],
    exports:[
        ThemeSwitcherComponent
    ]
})
export class Module { }