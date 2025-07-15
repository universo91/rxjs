import { asyncScheduler, observeOn, range } from 'rxjs'

// RANGE DE FORMA ASINCRONA

const src3$ = range(2, 6).pipe(
    observeOn(asyncScheduler)
);

console.log('INICIO');
src3$.subscribe(value => console.log(value));
console.log('FIN');
