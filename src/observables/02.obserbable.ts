import { Observable } from "rxjs";

const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("mundo");
    subs.next("rapidos y furiosos");

    subs.complete();

    subs.next("post complete")
});

obs$.subscribe(
    valor => console.log('next: ', valor),
    err => console.error(err),
    () => console.log('completado')    
)




