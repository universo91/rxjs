import { of } from "rxjs";

//const obs$ = of(1, 3, 4, 5, 6);
//const obs$ = of(...[1, 3, 4, 5, 6], 12, 85);
const obs$ = of([1, 3], {a: 1, b: 3}, function(){}, true, Promise.resolve(23));


console.log('Inicio del observable');
obs$.subscribe({
    next: value => console.log('next: ', value),
    error: null,
    complete: () => console.log('completado')
});
console.log('Fin del observable');

