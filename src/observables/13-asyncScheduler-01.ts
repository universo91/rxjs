import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('hola mundo');

//Alternativa a setTimeOut
// Ejecuta la funcion saludar despues de 2 segundos
asyncScheduler.schedule(saludar, 2000);