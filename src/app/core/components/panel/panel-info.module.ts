import { NgModule } from '@angular/core';
import { PanelInfoComponent } from './panel-info.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    PanelInfoComponent
  ],
  imports: [
    PanelModule
  ],
  exports: [
    PanelInfoComponent
  ]
})
export class PanelInfoModule { }
