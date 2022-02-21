import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './products/product-list.component';

@NgModule ({
    declarations : [
      AppComponent,
      ProductListComponent
],
imports: [
  BrowserModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule{}
