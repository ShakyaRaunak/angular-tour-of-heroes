import {Injectable} from '@angular/core';  // the hero.service imports the Angular Injectable symbol
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

// RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
import {Observable, of} from 'rxjs';

import {MessageService} from './message.service';

// Annotate the class with the @Injectable() decorator - marks the class as one that participates in the dependency injection system.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {  // use as when the app fetches heroes from a remote server, it is an inherently asynchronous operation.
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
