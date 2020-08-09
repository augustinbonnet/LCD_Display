"use strict";
exports.__esModule = true;
exports.DisplayableDigit = void 0;
var cell_1 = require("./cell");
var digit_1 = require("./digit");
var DisplayableDigit = /** @class */ (function () {
    function DisplayableDigit() {
        this.digits = [];
        //Creation of digits (from 0 to 9)
        var zero = new digit_1.Digit(0, null);
        var one = new digit_1.Digit(1, null);
        var two = new digit_1.Digit(2, null);
        var three = new digit_1.Digit(3, null);
        var four = new digit_1.Digit(4, null);
        var five = new digit_1.Digit(5, null);
        var six = new digit_1.Digit(6, null);
        var seven = new digit_1.Digit(7, null);
        var eight = new digit_1.Digit(8, null);
        var nine = new digit_1.Digit(9, null);
        zero.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Pipe, cell_1.Cell.Space, cell_1.Cell.Pipe],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Pipe]
        ];
        one.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Space],
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Pipe],
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Pipe]
        ];
        two.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Pipe],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Space]
        ];
        three.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Pipe],
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Pipe]
        ];
        four.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Space],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Pipe],
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Pipe]
        ];
        five.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Pipe]
        ];
        six.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Pipe]
        ];
        seven.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Pipe],
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Pipe]
        ];
        eight.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Pipe],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Pipe]
        ];
        nine.grid = [
            [cell_1.Cell.Space, cell_1.Cell.Underscore, cell_1.Cell.Space],
            [cell_1.Cell.Pipe, cell_1.Cell.Underscore, cell_1.Cell.Pipe],
            [cell_1.Cell.Space, cell_1.Cell.Space, cell_1.Cell.Pipe]
        ];
        this.digits.push(zero, one, two, three, four, five, six, seven, eight, nine);
    }
    return DisplayableDigit;
}());
exports.DisplayableDigit = DisplayableDigit;
exports["default"] = DisplayableDigit;
