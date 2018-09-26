import { NgModule } from '@angular/core';
import { CvComponent } from './cv.component';
import { CardInfoModule } from '../card/card-info.module';
import { PanelInfoModule } from '../panel/panel-info.module';
import { BrowserModule } from '@angular/platform-browser';
import { FieldsetModule } from 'primeng/primeng';
import { BlocModule } from '../bloc/bloc.module';

@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    BrowserModule,
    FieldsetModule,
    CardInfoModule,
    PanelInfoModule,
    BlocModule
  ],
  exports: [
    CvComponent
  ]
})
export class CvModule { }
