import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {C3Module} from 'ngx-c3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C3Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
