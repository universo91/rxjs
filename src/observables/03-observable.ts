import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}

const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("mundo");
    subs.next("rapidos y furiosos");

    subs.complete();

    subs.next("post complete")
});

obs$.subscribe( observer );


