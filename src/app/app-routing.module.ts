import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateListComponent } from './state-list/state-list.component'
import { StateDetailComponent } from './state-detail/state-detail.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/states', pathMatch: 'full'},
  { path: 'states', component: StateListComponent },
  { path: 'states/:id', component: StateDetailComponent },
  { path: ':type', component: StateListComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
