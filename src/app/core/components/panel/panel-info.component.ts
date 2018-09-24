import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelInfoComponent {

  constructor() {}
}
