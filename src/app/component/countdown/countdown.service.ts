import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class CountdownService {
  /**
   * currentTime (number): current time left to finish
   * loop (func): contains the Interval function
   * **/
  currentTime = 0;
  observable = new Subject<number>()
  loop = null;

  constructor() { }

  setTimeTo (time: number) {
    // time (number): Time in minutes
    this.currentTime = time * 60;
  }

  executeLoop = () => {
    this.currentTime = this.currentTime - 1;
    if (this.currentTime < 0) {
      this.stopTime();
    }
    this.observable.next(this.currentTime);
  }

  startTime () {
    this.loop = setInterval(this.executeLoop, 1000);
    return this.observable.asObservable();
  }

  stopTime () {
    if (this.loop) {
      clearInterval(this.loop);
      this.loop = null;
    }
  }

  resetTime (time: number) {
    const currentTime = time * 60;
    this.setTimeTo(time);
    this.observable.next(currentTime);
  }
}
