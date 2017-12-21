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

  selectState(state): void {
    const str = `You selected ${state.name}!`
    this.messageService.add(str)
  }

}
