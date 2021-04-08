import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildTwoComponentComponent } from './child-two-component/child-two-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ChildTwoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
