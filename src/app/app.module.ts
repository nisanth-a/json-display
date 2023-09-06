import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonDisplayComponent } from './json-display/json-display.component';
import { IsObjectPipe } from './object-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JsonDisplayComponent,
    IsObjectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
