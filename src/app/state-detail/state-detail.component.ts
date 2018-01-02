import { Component, OnInit, Input } from '@angular/core';
import { State } from '../state';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StateService } from '../state.service'

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {

  state: State
  helpers = require('../helpers.ts')

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getState()
  }

  getState(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')
    this.stateService.findStateById(id)
      .subscribe(state => this.state = state)
  }

  goBack(): void {
    this.location.back()
  }

}
