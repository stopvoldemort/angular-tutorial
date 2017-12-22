import { Component, OnInit } from '@angular/core';
import { State } from '../state'
import { StateService } from '../state.service'

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getStates()
  }

  onSelect(state: State): void {
    this.stateService.selectState(state)
  }

  getStates(): void {
    this.stateService.getStates()
      .subscribe(states => this.states = states)
  }

  states = []


}
