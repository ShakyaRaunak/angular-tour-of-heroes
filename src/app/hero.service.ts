import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

// RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  static getHeroes(): Observable<Hero[]> {
    return of(HEROES);  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }

}
