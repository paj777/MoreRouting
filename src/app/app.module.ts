import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HelloComponent } from './hello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    // enable routing
    AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    OverviewComponent,
    PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
