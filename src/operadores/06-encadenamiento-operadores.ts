import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), //KeyboardEvent, string
    filter(key => key === 'Enter')
);

keyup$.subscribe(console.log);