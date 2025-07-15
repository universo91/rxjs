import { asyncScheduler, SchedulerAction } from 'rxjs';

function saludar(this: SchedulerAction<number>, valor: number) {
    console.log(`Hola ${ valor }`);

    this.schedule(valor + 1, 1000);
}

asyncScheduler.schedule(saludar, 3000, 0);