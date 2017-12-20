import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = []

  add(message: string): void {
    this.messages.push(message)
  }

  addSecretMessage(message: string): void {
    this.messages.push(this.reverse(message))
  }

  reverse(string: string): string {
    let newString = ""
    for (let i = string.length; i > 0; i--) {
      newString + string[i]
    }
    return newString
  }

  clear(): void {
    this.messages = []
  }

  constructor() { }

}
