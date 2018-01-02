import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StateListComponent } from './state-list/state-list.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StateService } from './state.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StateListComponent,
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
