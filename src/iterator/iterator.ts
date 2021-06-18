class MyGenerator {
    [Symbol.iterator](): Iterator<number> {
        let counter = 0;
        return {
            next(): { value: number, done: boolean } {
                return { value: ++counter, done: counter > 5 };
            }
        };
    }
}

const g = new MyGenerator;

const arr = [1, 2, 3, 4];
for (const el of arr) {
    console.log(el);
}

const iterator = arr[Symbol.iterator]();
console.log(iterator);

let iteratorResult = iterator.next();
console.log(iteratorResult);