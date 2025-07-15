import { Observer, timer } from 'rxjs';

const observer: Observer<number> = {
    next: val => console.log('next: ', val),
    error: err => console.warn('warn: ', err),
    complete: () => console.info('completado')
};

// Emitira un unico valor(0) pasado 2 segundos de espera.
const timer1$ = timer(2000);
timer1$.subscribe( observer );
// Salida: 0

// Emitir una secuencia ascendente de números a intervalos de 1 segundo, tras 2 segundos de espera.
const timer2$ = timer(2000, 1000);
timer2$.subscribe(valor => console.log(valor));
// Salida: 0, 1, 2, 3, 4, 5...


const hoyEn5$ = new Date();
hoyEn5$.setSeconds( hoyEn5$.getSeconds() + 5);
const timer3$ = timer(hoyEn5$); // EMITIRA 0 TOMANDO EN CUENTA EL SEGUNDO DE LA FECHA ACTUAL AUMENTADO EN 5.

console.log('INICIO');
timer3$.subscribe( observer );
console.log('FIN');
    