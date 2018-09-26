import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bloc } from '../../model/bloc.model';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocComponent {

  @Input() bloc: Bloc;
}
