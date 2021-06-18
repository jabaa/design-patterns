import { writeFileSync } from 'fs';

interface Input {
    read(): string;
}

interface Converter {
    convert(str: string): string;
}

interface Output {
    write(str: string): void;
}

class StaticInput implements Input {
    read(): string {
        return "Static";
    }
}

class NoConvert implements Converter {
    convert(str: string): string {
        return str;
    }
}

class TimesamptConvert implements Converter {
    convert(str: string): string {
        return `${Date.now()}: ${str}`;
    }
}

class ConsoleOutput implements Output {
    write(str: string): void {
        console.log(str);
    }
}

class FileOutput implements Output {
    constructor(private path: string) { }
    write(str: string): void {
        writeFileSync(this.path, str);
    }
}

class Logger implements Input, Converter, Output {
    constructor(private input: Input, private converter: Converter, private output: Output) { }

    read(): string {
        return this.input.read();
    }

    convert(str: string): string {
        return this.converter.convert(str);
    }

    write(str: string): void {
        this.output.write(str);
    }

    run(): void {
        this.write(this.convert(this.read()));
    }
}

const basicLogger = new Logger(new StaticInput(), new NoConvert, new ConsoleOutput);

basicLogger.run();


const timestampLogger = new Logger(new StaticInput, new TimesamptConvert, new FileOutput('log.txt'));

timestampLogger.run();
