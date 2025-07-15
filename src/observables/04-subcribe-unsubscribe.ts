import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
    let i = 0;

    const intervaloId = setInterval(() => {
        subscriber.next(i++)
    }, 1000);

    return () => {
        clearInterval(intervaloId);
        console.log('destruyendo intervalo');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);


setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();
}, 3500);
