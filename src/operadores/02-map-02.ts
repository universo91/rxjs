import { fromEvent, map, range } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
);

keyUpCode$.subscribe(val => console.log('map: ', val))