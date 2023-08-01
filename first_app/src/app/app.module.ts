import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'  // for using the forms i have to import this FormsModule from angular/forms
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';  // so we have to import all the components made in the project like this
import {assignmentComponent} from './assignment-component/assignment.component'
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,  //after importing the component, we have to use it here then the angular server will know that these are the components that angular project is using
    assignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // after importing i have to use the module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
