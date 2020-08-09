import {Cell} from './cell';
import {Digit} from "./digit";

export default class DisplayableDigit{
    public digits:Digit[];

    constructor() {

        this.digits = [];
        //Creation of digits (from 0 to 9)
        let zero = new Digit(0, null);
        let one = new Digit(1,null);
        let two = new Digit(2,null);
        let three = new Digit(3,null);
        let four = new Digit(4,null);
        let five = new Digit(5,null);
        let six = new Digit(6,null);
        let seven = new Digit(7,null);
        let eight = new Digit(8,null);
        let nine = new Digit(9,null);

        zero.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Space, Cell.Pipe],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe]
        ];

        one.grid = [
            [Cell.Space, Cell.Space, Cell.Space],
            [Cell.Space, Cell.Space, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ];

        two.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Underscore, Cell.Pipe],
            [Cell.Pipe, Cell.Underscore, Cell.Space]
        ];

        three.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Underscore, Cell.Pipe],
            [Cell.Space, Cell.Underscore, Cell.Pipe]
        ];

        four.grid = [
            [Cell.Space, Cell.Space, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ];

        five.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Underscore, Cell.Pipe]
        ];

        six.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe]
        ];

        seven.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Space, Cell.Space, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ];

        eight.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe]
        ];

        nine.grid = [
            [Cell.Space, Cell.Underscore, Cell.Space],
            [Cell.Pipe, Cell.Underscore, Cell.Pipe],
            [Cell.Space, Cell.Space, Cell.Pipe]
        ];

        this.digits.push(zero, one, two, three, four, five, six, seven, eight, nine);

    }
}

export { DisplayableDigit };
