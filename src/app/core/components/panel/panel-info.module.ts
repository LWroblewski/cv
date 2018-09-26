import { NgModule } from '@angular/core';
import { PanelInfoComponent } from './panel-info.component';
import { PanelModule } from 'primeng/panel';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PanelModule,
    RatingModule
  ],
  exports: [
    PanelInfoComponent
  ]
})
export class PanelInfoModule { }
