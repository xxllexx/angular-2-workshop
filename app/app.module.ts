import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import FormSection from './components/FormSection';
import Multiple from './components/Multiple';
import Single from './components/Single';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
  	AppComponent,
  	FormSection,
  	Multiple,
  	Single
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }