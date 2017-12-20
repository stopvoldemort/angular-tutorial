import { Injectable } from '@angular/core';
import { State } from './state'
import { STATES } from './states'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class StateService {

  constructor() { }
  getStates(): Observable<State[]> {
    return of(STATES)
  }

}
