import { Component, OnInit } from '@angular/core';
import { State } from '../state'

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  state: State = {
    id: 1,
    name: "Vermont"
  }

}
