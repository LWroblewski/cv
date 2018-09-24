import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInfoComponent {

  constructor() {}
}
