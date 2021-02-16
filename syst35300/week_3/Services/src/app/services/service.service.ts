import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();
  constructor() { }

  setMessage(msg) {
    this.message.next(msg);
  }
}
