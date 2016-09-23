import { NgModule}      from '@angular/core';
import { FormsModule}      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import TodoComp from './TodoComp';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, TodoComp],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }