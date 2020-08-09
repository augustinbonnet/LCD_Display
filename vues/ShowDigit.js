"use strict";
exports.__esModule = true;
exports.ShowDigit = void 0;
var ShowDigit = /** @class */ (function () {
    function ShowDigit() {
    }
    ShowDigit.prototype.ShowOneDigit = function (Digit) {
        for (var i = 0; i < Digit.grid.length; i++) {
            var line = "";
            for (var j = 0; j < Digit.grid.length; j++) {
                line += Digit.grid[i][j];
            }
            console.log(line + "\n");
        }
        console.log("\n");
    };
    ShowDigit.prototype.ShowAllDigits = function (Digits) {
        for (var i = 0; i < 3; i++) {
            var line = "";
            for (var nbrDigits = 0; nbrDigits < Digits.length; nbrDigits++) {
                for (var j = 0; j < Digits[nbrDigits].grid.length; j++) {
                    line += Digits[nbrDigits].grid[i][j];
                }
                line += "  ";
            }
            console.log(line);
        }
        console.log();
    };
    return ShowDigit;
}());
exports.ShowDigit = ShowDigit;
