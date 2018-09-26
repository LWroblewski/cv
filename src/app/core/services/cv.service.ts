import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CV } from '../model/cv.model';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class CvService {

  private _currentCV: Observable<CV>;

  get currentCV(): Observable<CV> {
    return this._currentCV ||
      (this._currentCV = this.httpClient.get<CV>(environment.urlCV).pipe(shareReplay()));
  }

  constructor(private httpClient: HttpClient) {}
}
