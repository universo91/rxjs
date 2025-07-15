import { from, of } from 'rxjs';

const observer= {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}


// const sousrce$ = from([1, 3, 6, 7]);
// const sousrce$ = from('Roldan');
const sousrce$ = from( fetch('https://api.github.com/users/klerith') );


sousrce$.subscribe(async(res) => {
    const data = await res.json();
    console.log(data);
});