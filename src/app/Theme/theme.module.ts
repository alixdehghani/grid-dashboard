import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbCheckboxModule,
  NbCardModule,
  NbTabsetModule,
  NbTooltipModule,
  NbInputModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';




import { DEFAULT_THEME } from './theme.default';
import { COSMIC_THEME } from './theme.cosmic';
import { CORPORATE_THEME } from './theme.corporate';
import { DARK_THEME } from './theme.dark';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbCheckboxModule,
  NbCardModule,
  NbTabsetModule,
  NbTooltipModule,
  NbInputModule
];

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...NB_MODULES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
        ).providers,
      ],
    };
  }
}
