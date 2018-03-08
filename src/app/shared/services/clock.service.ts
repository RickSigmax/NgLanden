import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClockService {

  private clock: Observable<Date>;

  constructor() { 
     
  }

  //HORRIBLE WRONG CODE!
  // getClock(hours: number): Observable<Date>
  // {
  //   this.clock = Observable.interval(1000).map(tick=> {
  //      var d : Date = new Date();
  //      d.setUTCHours(hours);
  //      return d;
  //     }
  //     ).share();
  //    // ((new Date()).setHours((new Date()).getHours() + hours))).share();
  //   return this.clock ;
  // }


  getClock(): Observable<Date>
  {
    this.clock = Observable.interval(1000).map(tick=> new Date()).share();        
    return this.clock ;
  }
  

}
