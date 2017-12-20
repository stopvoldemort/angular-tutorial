import { Component, OnInit } from '@angular/core';
import { State } from '../state'
import { STATES } from '../states'

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedState: State
  onSelect(state: State): void {
    this.selectedState = state;
  }

  states = STATES


}
