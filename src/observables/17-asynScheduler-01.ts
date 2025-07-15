import { asyncScheduler } from 'rxjs';

const subs = asyncScheduler.schedule(function(state) {
    console.log('state: ', state)
    this.schedule(state + 1, 1000);
}, 3000, 0);

setTimeout(() => {
    subs.unsubscribe();
}, 6000); 
