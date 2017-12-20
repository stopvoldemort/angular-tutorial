import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { StateDetailComponent } from './state-detail/state-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StateDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
