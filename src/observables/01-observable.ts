import { Observable } from "rxjs";

//const obs$ = Observable.create(); normalmente no se usa, ademas esta deprecado

const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("mundo");
    subs.next("rapidos y furiosos");

    subs.complete();

    subs.next("post complete")
});

obs$.subscribe(console.log);





