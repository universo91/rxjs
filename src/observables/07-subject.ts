import { Observable, Subject } from "rxjs";

const intervalo$ = new Observable<number>(subscriber => {
    const intervaloId = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000)

    return () => {
        clearInterval(intervaloId);
        console.log('Intervalo destruido');
    }
});

const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe(rnd => console.log('subs1: ', rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2: ', rnd));

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    // Esto va a permitir que se ejecute la limpieza del intervalo. Asi el intervalo no seguira ejecutandose en segundo plano.
    subscription.unsubscribe();
}, 3500);