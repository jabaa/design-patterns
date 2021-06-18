interface Observer {
    next(arg: number): void;
    error(): void;
    complete(): void;
}

interface Observable {
    subscribe(arg0: Observer): void
}

class ConcreteObservable {
    subscribe(arg0: Observer): void {
        let counter = 0;
        const interval = setInterval(() => {
            arg0.next(counter);
            ++counter;
            if (counter === 5) {
                clearInterval(interval);
                arg0.complete();
            }
        }, 400);
    }
}

class ConcreteObeserver {
    constructor(public next: (counter: number) => void, public error: () => void, public complete: () => void) { }
}

const observable = new ConcreteObservable();
const observer = new ConcreteObeserver(
    (counter: number) => {
        console.log('Observer 1, Next: ' + counter);
    },
    () => {
        console.log('Error');
    },
    () => {
        console.log('Complete');
    });

observable.subscribe(observer);
observable.subscribe(new ConcreteObeserver(
    (counter: number) => {
        console.log('Observer 2, Next: ' + counter);
    },
    () => {
        console.log('Error2');
    },
    () => {
        console.log('Complete2');
    }));
