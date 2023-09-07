import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonDisplayComponent } from './json-display/json-display.component';
import { IsObjectPipe } from './object-type.pipe';
import { JsonDisplayIndexComponent } from './json-display-index/json-display-index.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonDisplayComponent,
    IsObjectPipe,
    JsonDisplayIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
