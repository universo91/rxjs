import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('hola mundo');

// Ejecuta la funcion saludar despues de 2 segundos
asyncScheduler.schedule(saludar, 2000);