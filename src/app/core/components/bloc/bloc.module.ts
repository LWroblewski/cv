import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlocComponent } from './bloc.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    BlocComponent
  ],
  imports: [
    BrowserModule,
    PanelModule
  ],
  exports: [
    BlocComponent
  ]
})
export class BlocModule { }
