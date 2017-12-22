import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from './state/state.component'
import { StateDetailComponent } from './state-detail/state-detail.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'states', component: StateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'states/:id', component: StateDetailComponent },
  { path: ':type', component: StateComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
