import { fromEvent, map, pluck } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
);

const keyUpCodePluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);


keyUpCode$.subscribe(val => console.log('map: ', val))
keyUpCodePluck$.subscribe( val => console.log('pluck: ', val));