import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { StateDetailComponent } from './state-detail/state-detail.component';

import { StateService } from './state.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'


@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StateDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
