/*interface Input {
    read(): string;
}

interface Output {
    write(str: string): void;
}

interface Converter {
    convert(str: string): string;
}

class Logger implements Input, Output, Converter {
    constructor(private input: Input, private output: Output, private converter: Converter) { }

    read(): string {
        return this.input.read();
    }

    write(str: string): void {
        this.output.write(str);
    }

    convert(str: string): string {
        return this.converter.convert(str);
    }

    log(): void {
        this.read();
    }
}*/