import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
