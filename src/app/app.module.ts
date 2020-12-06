import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbLayoutModule } from '@nebular/theme';
import { ThemeModule } from './Theme/theme.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot(),
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
