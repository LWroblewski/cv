import {NgModule} from '@angular/core';
import { CardInfoComponent } from './card-info.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    CardInfoComponent
  ],
  imports: [
    CardModule
  ],
  exports: [
    CardInfoComponent
  ]
})
export class CardInfoModule { }
