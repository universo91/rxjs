import { fromEvent, map, mapTo, pluck } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
);

const keyUpMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

keyUpCode$.subscribe(val => console.log('map: ', val))
keyUpMapTo$.subscribe( val => console.log('pluck: ', val));