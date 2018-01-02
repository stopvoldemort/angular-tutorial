import { Component, OnInit } from '@angular/core';
import { State } from '../state'
import { StateService } from '../state.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-state',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  states = []
  selectedType = ""
  helpers = require('../helpers.ts')

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {}

  // When the component is initialized, gets a list of all the states
  ngOnInit() {
    this.getStates()
  }

  // On each change to the page, sets the selectedType based on the URL
  ngDoCheck() {
    this.getType()
  }

  getStates(): void {
    this.stateService.getStates()
      .subscribe(states => this.states = states)
  }

  getType(): void {
    this.selectedType = this.route.snapshot.paramMap.get("type")
  }

}
