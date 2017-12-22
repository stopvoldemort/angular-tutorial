import { Injectable } from '@angular/core';
import { State } from './state'
import { STATES } from './states'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'


@Injectable()
export class StateService {

  constructor(private messageService: MessageService) { }

  getStates(): Observable<State[]> {
    const str = this.messageService.reverse("StateService: Fetched States")
    this.messageService.add(str)
    return of(STATES)
  }

  getDataTypes(): Observable<string[]> {
    let types = []
    if (STATES.length) {
      const keys = Object.keys(STATES[0])
      types = keys.filter(k => k!=="id" && k!=="name")
    }
    return of(types)
  }

  findStateById(id: number): Observable<State> {
    return of(STATES.find(s => s.id === id))
  }

}
