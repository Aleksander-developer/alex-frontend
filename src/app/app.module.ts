import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { SharedModule } from './shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoteBox } from './shared/components/quote-box/quote-box';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
