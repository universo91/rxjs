import { asyncScheduler, range } from 'rxjs'

//emitira los cinco primeros elementos a partir del valor inicial 1
const src$ = range(1, 5);

src$.subscribe(value => console.log(value));

// emitira los 10 primeros elementos a partir del valor inicial -5
const src2$ = range(-5, 10);

console.log('INICIO');
src2$.subscribe(value => console.log(value));
console.log('FIN');


// RANGE DE FORMA ASINCRONA

const src3$ = range(2, 6, asyncScheduler);

console.log('INICIO');
src3$.subscribe(value => console.log(value));
console.log('FIN');

