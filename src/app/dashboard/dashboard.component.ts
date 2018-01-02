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
  dataTypes: string[] = []
  readableTypes: string[] = []

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getStates()
    this.getDataTypes()
  }

  getStates(): void {
    this.stateService.getStates()
      .subscribe(states => this.states = states.slice(1,5))
  }

  getDataTypes(): void {
    this.stateService.getDataTypes()
      .subscribe(dataTypes => {
        this.dataTypes = dataTypes
        this.readableTypes = this.dataTypes.map(t => this.humanize(t))
      })
  }

  humanize(str): string {
    let result = str.replace( /([A-Z])/g, " $1" )
    result = result.split(" ").map(r => r.charAt(0).toUpperCase() + r.slice(1))
    return result.join(" ")
  }

}
