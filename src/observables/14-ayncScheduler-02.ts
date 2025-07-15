import { asyncScheduler } from 'rxjs';

const saludar2 = ({nombre, apellido} : {nombre: string, apellido: string}) => console.log(`Hola ${ nombre } ${ apellido }`);

// Si la funcion tiene argumento, en tal caso este argumento se le debe proporcionar en el tarcer argumento de la funcion schedule el cual representa el estado.
asyncScheduler.schedule(saludar2, 2000, {nombre: 'Roldan', apellido: 'Collado Valenzuela'});