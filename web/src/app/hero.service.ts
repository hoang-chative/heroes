import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mocks/hero.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  getHero(id: number): Observable<Hero | undefined> {
    return of(HEROES.find((h) => h.id === id));
  }
}
