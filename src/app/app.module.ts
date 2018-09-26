import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvService } from './core/services/cv.service';
import { HttpClientModule } from '@angular/common/http';
import { CvModule } from './core/components/cv/cv.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CvModule
  ],
  providers: [
    CvService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
