import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  HttpClientModule} from "@angular/common/http";
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from './shared/material.module';
import { MainComponent } from './main/main.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { UserService } from './services/user.service';
import { NotesComponent } from './notes/notes.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainNavComponent,
    SideNavComponent,
    NewContactComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,

  ],
  entryComponents: [NewContactComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
