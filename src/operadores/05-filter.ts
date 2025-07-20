import { from, range } from 'rxjs';
import { filter } from 'rxjs/operators';

range(1, 10).pipe(
    filter(val => val % 2  == 1 )
).subscribe(console.log)

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
]

from(personajes).pipe(
    filter(personaje => personaje.tipo == 'heroe')
).subscribe(console.log);