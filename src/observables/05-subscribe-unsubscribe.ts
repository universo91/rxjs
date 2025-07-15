import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<number> = {
    next: val => console.log('next: ', val),
    error: err => console.warn('warn: ', err),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    let i = 0;

   const intervalId = setInterval(() => {
        subscriber.next(i++);
    }, 1000)

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(intervalId);
        console.log('Intervalo destruido')
    }

});

const inter1 = intervalo$.subscribe( observer );
const inter2 = intervalo$.subscribe( observer );
const inter3 = intervalo$.subscribe( observer );

const principalSubscripcion = new Subscription();
principalSubscripcion.add( inter1);
principalSubscripcion.add(inter2);
principalSubscripcion.add(inter3);

setTimeout(() => {
    principalSubscripcion.unsubscribe();    
    console.log('completado timeout');
}, 3000);
