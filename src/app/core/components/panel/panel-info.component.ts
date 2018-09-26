import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PanelContent, PanelContentType } from '../../model/panel-content.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelInfoComponent {

  @Input()
  content: PanelContent;

  private hasHeader(): boolean {
    return this.content && this.content.header !== null;
  }

  private hasBody(): boolean {
    return this.content && this.content.body !== null;
  }

  get title(): string {
    return this.hasHeader() ? this.content.header.title : null;
  }

  get icon(): string {
    return this.hasHeader() ? `pi ${this.content.header.icon}` : null;
  }

  get contentType(): PanelContentType {
    return this.hasBody() ? this.content.body.type : null;
  }

  get contentBody(): string | string[] | { [key: string]: string }[] {
    return this.hasBody() ? this.content.body.content : null;
  }

  getLineKey(line: { [key: string]: string }): string {
    return Object.keys(line)[0];
  }

  getLineValue(line: { [key: string]: string }): string {
    return Object.values(line)[0];
  }
}
