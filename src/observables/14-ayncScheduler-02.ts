import { asyncScheduler } from 'rxjs';

const saludar2 = ({nombre, apellido} : {nombre: string, apellido: string}) => console.log(`Hola ${ nombre } ${ apellido }`);

// Alternativa a SetInterval
// Si la funcion tiene parametro, en tal caso este parametro se le debe proporcionar en el tercer argumento de la funcion schedule el cual representa el estado.
asyncScheduler.schedule(saludar2, 2000, {nombre: 'Roldan', apellido: 'Collado Valenzuela'});