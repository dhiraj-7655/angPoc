import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TempComponent]
})
export class AppModule { }
