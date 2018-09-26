import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CvService } from './core/services/cv.service';
import { Observable } from 'rxjs';
import { CV } from './core/model/cv.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  cv$: Observable<CV>;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cv$ = this.cvService.currentCV;
  }
}
