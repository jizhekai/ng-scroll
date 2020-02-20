import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollModule } from 'projects/ngx-scroll/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NoopAnimationsModule, NgxScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
