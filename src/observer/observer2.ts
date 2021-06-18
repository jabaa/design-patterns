import { Observable, Observer } from 'rxjs';

const observable = new Observable<number>(subscriber => {
    let counter = 0;
    const interval = setInterval(() => {
        subscriber.next(counter);
        ++counter;
        if (counter === 5) {
            clearInterval(interval);
            subscriber.complete();
        }
    }, 400);
});

const observer: Observer<number> = {
    next(counter: number) {
        console.log('Observer 1, Next: ' + counter);
    },
    error() {
        console.log('Error');
    },
    complete() {
        console.log('Complete');
    }
};

observable.subscribe(observer);
