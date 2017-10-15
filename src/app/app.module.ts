import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ElementEditorComponent} from './element-editor/element-editor.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ElementEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Angular Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
