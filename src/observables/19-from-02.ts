import { from, of } from 'rxjs';

const observer= {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer);