interface Bill {
    total: () => number;
}

abstract class Base implements Bill {
    abstract total(): number;
    printTotal(): void {
        console.log(this.total());
    }
}

abstract class Base2 {
    abstract f(): string;
}

class Derived extends BaseStrategy, Base2Strategy {
    constructor(BaseStrategy, Base2Strategy) { }

    total(): number {
        return 0;
    }
    f() {

    }
}

const d = new Derived();

d.printTotal();
