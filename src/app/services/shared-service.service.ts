import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private cancelEvent = new Subject<void>();

  cancelEvent$ = this.cancelEvent.asObservable();

  emitCancelEvent() {
    this.cancelEvent.next();
  }
}
