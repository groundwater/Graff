import { Compiler } from '../../Compiler';

export abstract class Input {
    abstract WriteDeclare(compiler: Compiler, local: number, slot: number): Generator<string>;
    abstract Write(compiler: Compiler, local: number, slot: number): Generator<string>;
}

