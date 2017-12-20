import { Component, OnInit, Input } from '@angular/core';
import { State } from '../state';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() state: State;

}
