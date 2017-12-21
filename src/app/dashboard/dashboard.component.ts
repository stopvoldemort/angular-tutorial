import { Component, OnInit } from '@angular/core';
import { State } from '../state'
import { StateService } from '../state.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  states: State[] = []

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getStates()
  }

  getStates(): void {
    this.stateService.getStates()
      .subscribe(states => this.states = states.slice(1,5))
  }

}
