import {Cell} from './cell';
import {Digit} from "./digit";

export class DisplayableDigit{
    public digits:Digit[];

    constructor() {

        this.digits = [];
        //Creation of digits (from 0 to 9)
        let zero = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Space, Cell.Pipe],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe]
        ]);

        let one = new Digit([
            [Cell.Space, Cell.Space, Cell.Space],
            [Cell.Space, Cell.Space, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ]);

        let two = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Underscore, Cell.Pipe],
            [Cell.Pipe, Cell.Underscore, Cell.Space]
        ]);

        let three = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Underscore, Cell.Pipe],
            [Cell.Space, Cell.Underscore, Cell.Pipe]
        ]);

        let four = new Digit([
            [Cell.Space, Cell.Space, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ]);

        let five = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Underscore, Cell.Pipe]
        ]);

        let six = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe]
        ]);

        let seven = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Space, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ]);

        let eight = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe]
        ]);

        let nine = new Digit([
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ]);

        this.digits.push(zero, one, two, three, four, five, six, seven, eight, nine);
    }
}
