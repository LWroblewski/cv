import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardInfoModule } from './core/components/card/card-info.module';
import { PanelInfoModule } from './core/components/panel/panel-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardInfoModule,
    PanelInfoModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
