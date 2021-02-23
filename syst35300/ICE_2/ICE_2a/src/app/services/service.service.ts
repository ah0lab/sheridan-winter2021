import { Injectable } from '@angular/core';
import { BehaviorSubject as BehaviourSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() { }

  message = new BehaviourSubject('');

  sharedMessage = this.message.asObservable();

  setMessage(msg) {
    this.message.next(msg);
  }
}
