import { Component, OnInit } from '@angular/core';
import { State } from '../state'
import { StateService } from '../state.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states = []
  selectedType = "deaths"

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.getStates()
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
