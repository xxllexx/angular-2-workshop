import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import FormSection from './components/FormSection';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
  	AppComponent,
  	FormSection
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }