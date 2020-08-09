import { DisplayableDigit } from "../models/DisplayableDigit";
import { Digit } from "../models/digit";

export class ShowDigit {

    ShowOneDigit(Digit : Digit){
        for(let i=0; i < Digit.grid.length; i++){
            let line = "";
            for(let j=0; j < Digit.grid.length; j++){
                line += Digit.grid[i][j];
            }
            console.log(line + "\n");
        }
        console.log("\n");
    }

    ShowAllDigits(Digits : Digit[]){
        for(let i=0; i < 3 ; i++){
            let line = "";
            for(let nbrDigits = 0; nbrDigits < Digits.length ; nbrDigits++){
                for(let j=0; j < Digits[nbrDigits].grid.length; j++){
                    line += Digits[nbrDigits].grid[i][j];
                }
                line += "  ";
            }
            console.log(line);
        }
        console.log();
    }
}
