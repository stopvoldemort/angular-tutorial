import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { StateDetailComponent } from './state-detail/state-detail.component';

import { StateService } from './state.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'


@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StateDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StateService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
