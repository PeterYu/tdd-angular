import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SpacexModule} from './spacex/spacex.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SpacexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
