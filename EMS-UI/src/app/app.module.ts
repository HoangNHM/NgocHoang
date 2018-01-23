import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
} from '@angular/material';


import {AppComponent} from './app.component';
import {SmsPageComponent} from './sms-page/sms-page.component';
import {TableComponent} from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    SmsPageComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
