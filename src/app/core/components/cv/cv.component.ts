import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CV } from '../../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent {

  @Input() cv: CV;
}
